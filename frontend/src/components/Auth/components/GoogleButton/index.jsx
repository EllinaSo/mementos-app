import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Snackbar from '../../../Snackbar';

const GoogleButton = ({ formType }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      navigate('/');
    },
    onError: () => setError(`Google ${formType} was unsuccessful! Please try again later.`),
  });

  return (
    <>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => login()}
      >
        Google
        {' '}
        {formType}
      </Button>

      <Snackbar open={!!error} message={error} onClose={() => setError(null)} />
    </>
  );
};

export default GoogleButton;
