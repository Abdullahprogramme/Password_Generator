import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

// Password generator function
function generatePasswords(options) {
  // Generate a list of passwords based on the selected options
  // This is just a placeholder. Replace this with your actual password generation logic.
  const charset = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()',
  };

  let selectedCharset = '';
  for (const option in options) {
    if (options[option]) {
      selectedCharset += charset[option];
    }
  }

  const passwords = [];
  for (let i = 0; i < 10; i++) {
    let password = '';
    for (let j = 0; j < 8; j++) {
      password += selectedCharset[Math.floor(Math.random() * selectedCharset.length)];
    }
    passwords.push({ label: password });
  }

  return passwords;
}

export default function ComboBox() {
    const [options, setOptions] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });
    const [passwords, setPasswords] = useState([]);
    const [value, setValue] = React.useState(null);

    const handleCheckboxChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
    };

    const handleGenerateClick = () => {
        setValue(null);
        setPasswords(generatePasswords(options));
    };

    return (
        <div>
            <Card sx={{ 
                position: 'sticky', // Add this line
                top: 0,
                marginBottom: 1, 
                marginTop: 1, 
                backgroundColor: '#A1C398', 
                maxWidth: 300, 
                marginLeft: 'auto', 
                marginRight: 'auto',
                border: '1px solid #A1C398',
                boxShadow: '0 2px 2px 2px rgba(0, 0, 0, .3)',
                transition: '0.3s',
                '&:hover': {
                    boxShadow: '0 3px 5px 4px rgba(0, 0, 0, .3)',
                },}} variant='default'>
                <CardContent sx={{ padding: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox size="small" checked={options.uppercase} onChange={handleCheckboxChange} name="uppercase" />}
                        label="Include Uppercase Letters"
                        />
                        <FormControlLabel
                        control={<Checkbox size="small" checked={options.lowercase} onChange={handleCheckboxChange} name="lowercase" />}
                        label="Include Lowercase Letters"
                        />
                        <FormControlLabel
                        control={<Checkbox size="small" checked={options.numbers} onChange={handleCheckboxChange} name="numbers" />}
                        label="Include Numbers"
                        />
                        <FormControlLabel
                        control={<Checkbox size="small" checked={options.symbols} onChange={handleCheckboxChange} name="symbols" />}
                        label="Include Symbols"
                        />
                        
                        <Box display="flex" justifyContent='center'>
                            <Button variant="contained" onClick={handleGenerateClick} startIcon={<RefreshIcon />}>Generate</Button>
                        </Box>
                </CardContent>
            </Card>

            <Card sx={{ 
                position: 'sticky',
                top: 0,
                marginBottom: 0, 
                marginTop: 2, 
                backgroundColor: '#A1C398', 
                maxWidth: 300, 
                marginLeft: 'auto', 
                marginRight: 'auto',
                border: '1px solid #A1C398',
                boxShadow: '0 2px 2px 2px rgba(0, 0, 0, .3)',
                transition: '0.3s',
                '&:hover': {
                    boxShadow: '0 3px 5px 4px rgba(0, 0, 0, .3)',
                },}} variant='default'>
                <CardContent sx={{ padding: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Autocomplete
                    disablePortal={false}
                    isOptionEqualToValue={(option, value) => option.label === value.label}
                    id="combo-box-demo"
                    options={passwords}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ 
                        width: 200, 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        backgroundColor: '#789461',
                        '& .MuiAutocomplete-paper': {
                            maxHeight: 144, // Adjust this value as needed
                            overflow: 'auto',
                        },
                    }}
                    renderInput={(params) => <TextField {...params} label="Password" />}
                />
                </CardContent>
            </Card>
        </div>
    );
}
