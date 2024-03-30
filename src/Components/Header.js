import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#FE7A36" color="#49243E" p={1} width="100%">
      <Typography variant="h4" component="h1" gutterBottom>
        Password Generator
      </Typography>
    </Box>
  );
}

export default Header;