import * as React from 'react';
import Button from '@mui/material/Button';


export default function Buttons({label,actions, Icon}) {
  return (
   
      <Button onClick={actions}  fullWidth  variant="outlined" size='large' startIcon={<Icon />}>
        {label}
      </Button>
 
  );
}