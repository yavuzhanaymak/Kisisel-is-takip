import * as React from 'react';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box
    sx={{
      width: '100%',
      height: 70,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >

    <h4>
        Yavuzhan Aymak
    </h4>
    </Box>
  )
}
