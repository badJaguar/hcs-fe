import React from "react";

import { IconButton } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

const SnackbarAction = ({ onClose }: { onClose: (event: React.SyntheticEvent | Event, reason?: string) => void; }) => {
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    onClose(event, reason);
  };

  return (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
    </React.Fragment>
  );
};

export default SnackbarAction;
