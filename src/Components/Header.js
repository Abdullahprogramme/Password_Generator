import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Grid from '@mui/material/Grid';

function Header({ darkMode, setDarkMode }) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#FE7A36" color="#49243E" p={0} width='100%' boxShadow={2}>
      <Grid item xs>
        <Typography className='Header' variant="h6" sx={{ fontFamily: 'Raleway, sans-serif', color: 'cyan', marginLeft: 1 }} gutterBottom>
          Passforge - select and copy 
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Tooltip title="Toggle dark mode">
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </Grid>
    </Box>
  );
}

export default Header;
