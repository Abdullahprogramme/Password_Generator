import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


function PasswordBox({ passwords }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    if (passwords && passwords.length > 0) {
      setCurrentIndex((currentIndex + 1) % passwords.length);
    }
  };

  const handlePrevious = () => {
    if (passwords && passwords.length > 0) {
      setCurrentIndex((currentIndex - 1 + passwords.length) % passwords.length);
    }
  };


  return (
      <>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: 200,
          height: 50, 
          padding: 1, 
          margin: 1, 
          backgroundColor: theme.palette.mode === 'dark' ? '#2D4159' : '#78244C' 
        }}
      >
        <Typography color='white'>
          {passwords && passwords.length > 0 ? passwords[currentIndex].label : "No options"}
        </Typography>

        <Tooltip title="Copy">
          <IconButton
            onClick={() => {
              const textToCopy = passwords && passwords.length > 0 && passwords[currentIndex] ? passwords[currentIndex].label : "";
              navigator.clipboard.writeText(textToCopy);
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton onClick={handlePrevious} disabled={currentIndex === 0}>
              <NavigateBeforeIcon />
          </IconButton>
          <Typography color='white'>{Math.min(currentIndex + 1, 10)} / {Math.min(passwords.length, 10)}</Typography>
          <IconButton onClick={handleNext} disabled={currentIndex === 9 || currentIndex === passwords.length - 1}>
              <NavigateNextIcon />
          </IconButton>
      </Box>
      </>
  );
}

export default PasswordBox;
