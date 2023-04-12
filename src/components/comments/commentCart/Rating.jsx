import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function BasicRating({ data }) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      <Rating
      sx={{
        '& .MuiRating-iconEmpty': {color : 'gray'}
      }}
      name="read-only" value={data} readOnly />
    </Box>
  );
}