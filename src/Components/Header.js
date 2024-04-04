import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#FE7A36" color="#49243E" p={0} width='100%' boxShadow={2}>
      <Typography className='Header' variant="h6" sx={{ fontFamily: 'Raleway, sans-serif', color: 'cyan' }} gutterBottom>
        Passforge - select and copy 
      </Typography>
    </Box>
  );
}

export default Header;
