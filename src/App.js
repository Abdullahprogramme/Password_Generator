import React from "react";
import Header from "./Components/Header";
import Generator from "./Components/Generator";
import Footer from "./Components/Footer";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#2C3531' : '#EEE2DC',
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" sx={{minHeight: {xs: '95vh', sm: '100vh'},}}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Generator />
        <Box mt="auto">
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
