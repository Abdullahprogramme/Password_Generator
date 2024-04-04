import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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
        <Tooltip {...{ title: darkMode ? 'Light Mode' : 'Dark Mode' }}>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>
      </Grid>
    </Box>
  );
}

export default Header;
