import React, { useState, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { signIn, signUp, setErrorAuth } from '../../../../actions/auth';
import Snackbar from '../../../../components/Snackbar';

import PasswordField from '../PasswordField';
import GoogleButton from '../GoogleButton';

const STATE = {
  password: '',
  email: '',
  firstName: '',
  lastName: '',
  repeatPassword: '',
};

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, toggleIsSignIn] = useReducer((prev) => !prev, false);
  const { loadingAuth, errorAuth } = useSelector((store) => store.auth);

  const [userData, setUserData] = useState(STATE);
  const {
    password, email, firstName, lastName, repeatPassword,
  } = userData;

  const submitHandle = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(userData, () => navigate('/')));
    } else {
      dispatch(signIn({ email, password }, () => navigate('/')));
    }
  };

  const changeHandle = ({ target: { name, value } }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const formType = isSignUp ? 'sign up' : 'sign in';

  return (
    <Card>
      <Box sx={{ p: 2 }} as="form" xs={{ novalidate: true }} onSubmit={submitHandle}>
        <Typography component="div" variant="h6" textTransform="capitalize">
          {formType}
        </Typography>

        <Box sx={{ py: 2 }}>
          <Grid container spacing={2} fullWidth>
            {isSignUp && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    required
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={changeHandle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="lastName"
                    label="Last Name"
                    value={lastName}
                    onChange={changeHandle}
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={changeHandle}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                required
                name="password"
                label="Password"
                value={password}
                onChange={changeHandle}
              />
            </Grid>

            {isSignUp && (
              <Grid item xs={12}>
                <PasswordField
                  required
                  name="repeatPassword"
                  label="Repeat Password"
                  value={repeatPassword}
                  onChange={changeHandle}
                />
              </Grid>
            )}
          </Grid>
        </Box>

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            fullWidth
            type="submit"
            onClick={submitHandle}
            endIcon={loadingAuth ? <CircularProgress color="inherit" size={14} /> : null}
            disabled={loadingAuth}
          >
            {formType}
          </Button>
          <GoogleButton formType={formType} disabled={loadingAuth} />
        </Stack>

        <Typography mt={3}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          {' '}
          <Link
            component="button"
            onClick={toggleIsSignIn}
            disabled={loadingAuth}
          >
            { `Sign ${isSignUp ? 'in' : 'up'}!`}
          </Link>
        </Typography>
      </Box>

      <Snackbar
        open={!!errorAuth}
        message={errorAuth}
        onClose={() => dispatch(setErrorAuth(null))}
      />
    </Card>
  );
};

export default Form;
