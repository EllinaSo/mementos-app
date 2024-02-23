import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

import CircularProgress from '@mui/material/CircularProgress';

import { loginGoogle, setError } from '../../../../actions/auth';
import Snackbar from '../../../../components/Snackbar';

const GoogleButton = ({ formType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((store) => store.auth);
  const [initialError, setInitialError] = useState(null);

  const login = useGoogleLogin({
    onSuccess: ({ access_token: token }) => dispatch(loginGoogle(token, () => navigate('/', { replace: true }))),
    onError: () => setInitialError(`Google ${formType} was unsuccessful! Please try again later.`),
  });

  return (
    <>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => login()}
        endIcon={loading ? <CircularProgress color="inherit" size={14} /> : null}
      >
        Google
        {' '}
        {formType}
      </Button>

      <Snackbar
        open={!!(error || initialError)}
        message={error || initialError}
        onClose={() => {
          setInitialError(null);
          dispatch(setError(null));
        }}
      />
    </>
  );
};

export default GoogleButton;
