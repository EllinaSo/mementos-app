import React from 'react';
import Alert from '@mui/material/Alert';
import SnackbarBase from '@mui/material/Snackbar';

const Snackbar = ({
  open, onClose, message, severity = 'error',
}) => (
  <SnackbarBase
    open={open}
    onClose={onClose}
  >
    <Alert severity={severity}>
      {message}
    </Alert>
  </SnackbarBase>
);

export default Snackbar;
