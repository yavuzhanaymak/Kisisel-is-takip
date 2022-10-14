import React  from 'react';
 import { TextField } from '@mui/material';
const Input = ({fullWidth,label}) => {
 

  return (
    <>
    <TextField fullWidth id="outlined-basic" label={label} variant="outlined" />

    </>
  );
};
export default Input;
