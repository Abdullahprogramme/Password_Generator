import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useTheme } from '@mui/material/styles';

import PasswordBox from './PasswordBox';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function ComboBox() {
    const [options, setOptions] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
        length: 8,
    });
    const [passwords, setPasswords] = useState([]);
    const [alert, setAlert] = useState({ open: false, message: '' });

    const theme = useTheme();

    const handleCheckboxChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
    };

    const handleLengthChange = (event) => {
        setOptions({ ...options, length: event.target.value });
    };

    const handleGenerateClick = () => {
        setPasswords(generatePasswords(options));
    };

    // Password generator function
    function generatePasswords(options) {
        // Generate a list of passwords based on the selected options
        // This is just a placeholder. Replace this with your actual password generation logic.
        if (options.length < 3 || options.length > 11) {
        // return [{ label: 'Password length must be between 3 and 11' }];
        setAlert({ open: true, message: 'Password length must be between 3 and 11' });
            return [];
        }
    
        if (!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) {
            // return [{ label: 'Select at least one option' }];
            setAlert({ open: true, message: 'Select at least one option' });
            return [];
        }
    
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
        for (let j = 0; j < options.length; j++) {
            password += selectedCharset[Math.floor(Math.random() * selectedCharset.length)];
        }
        passwords.push({ label: password });
        }
    
        return passwords;
    }


    return (
        <div className="mt-10">
            <Snackbar
                open={alert.open}
                message={alert.message}
                autoHideDuration={null}
                style={{
                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#A1C398',
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000'
                }}
                action={
                    <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => setAlert({ open: false, message: '' })}
                    >
                    <CloseIcon fontSize="small" />
                    </IconButton>
                }/>
            <Card sx={{ 
                position: 'sticky', // Add this line
                top: 0,
                marginBottom: 1, 
                marginTop: 1, 
                borderRadius: 0,
                backgroundColor: theme.palette.mode === 'dark' ? '#2D4159' : '#78244C',  
                maxWidth: 280, 
                marginLeft: 'auto', 
                marginRight: 'auto',
                border: '1px solid #A1C398',
                borderColor: theme.palette.mode === 'dark' ? '#2D4159' : '#78244C',
                transition: '0.3s',}} 
                variant='default'>
                <CardContent sx={{ padding: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <FormControlLabel
                        control={<Checkbox size="small" checked={options.uppercase} onChange={handleCheckboxChange} name="uppercase" />}
                        label={<span style={{color: 'white'}}>Include Uppercase Letters</span>}
                        />
                        <FormControlLabel
                        control={<Checkbox size="small" checked={options.lowercase} onChange={handleCheckboxChange} name="lowercase" />}
                        label={<span style={{color: 'white'}}>Include Lowercase Letters</span>}
                        />
                        <FormControlLabel
                        control={<Checkbox size="small" checked={options.numbers} onChange={handleCheckboxChange} name="numbers" />}
                        label={<span style={{color: 'white'}}>Include Numbers</span>}
                        />
                        <FormControlLabel
                        control={<Checkbox size="small" checked={options.symbols} onChange={handleCheckboxChange} name="symbols" />}
                        label={<span style={{color: 'white'}}>Include Symbols</span>}
                        />
                        <TextField 
                            type='number' 
                            label={<span style={{color: 'white'}}>Password Length</span>} 
                            variant='standard' 
                            size='small' 
                            sx={{ width: 200, marginLeft: 'auto', marginRight: 'auto', marginBottom: 2}} 
                            inputProps={{ min: 3, max: 11 }}
                            value={options.length} 
                            onChange={handleLengthChange}
                        />
                        
                        <Box display="flex" justifyContent='center'>
                            <Button variant="contained" onClick={handleGenerateClick} startIcon={<RefreshIcon />}>Generate</Button>
                        </Box>
                </CardContent>
            </Card>

            <Card sx={{ 
                position: 'sticky',
                top: 0,
                borderRadius: 0,
                marginBottom: 0, 
                marginTop: 2, 
                height: 125,
                backgroundColor: theme.palette.mode === 'dark' ? '#2D4159' : '#78244C',
                maxWidth: 280, 
                marginLeft: 'auto', 
                marginRight: 'auto',
                border: '1px solid #A1C398',
                borderColor: theme.palette.mode === 'dark' ? '#2D4159' : '#78244C',
                transition: '0.3s',}} 
                variant='default'>
                <CardContent sx={{ padding: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <PasswordBox passwords={passwords} />
                </CardContent>
            </Card>
        </div>
    );
}
