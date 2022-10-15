import React  from 'react';
 import { TextField } from '@mui/material';
const Input = ({value="",label, onChange , disabled}) => {
 

  return (
    <>
    <TextField onChange={onChange} value={value} disabled={disabled} fullWidth id="outlined-basic" label={label} variant="outlined" />

    </>
  );
};
export default Input;
