import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



export default function Select({label,onChange,value,data}) {


  return (
    <Box
      component="form"
      
      noValidate
      autoComplete="off"
    >
     
        <TextField
          id="outlined-select-currency"
          select
          label={label}
          fullWidth
          value={value}
          onChange={onChange}
         
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value} type={option.type}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
    
  
    </Box>
  );
}
