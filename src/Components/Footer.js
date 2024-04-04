import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Box, IconButton } from '@mui/material';

function Footer() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#FE7A36"
            color="#49243E"
            p={1}
            width="100%"
            position="fixed"
            bottom={0}
        >
            <div className='flex flex-row justify-center items-center w-full'>
                <IconButton color="inherit" target='_blank'  rel="noopener noreferrer" href='https://www.linkedin.com/in/abdullahtariq78/'>
                    <FaLinkedin size={24} />
                </IconButton>
                <IconButton color="inherit" target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/abdullah.tariq.7262'>
                    <FaFacebook size={24} />
                </IconButton>
                <IconButton color="inherit" href="https://www.instagram.com/abdullahtariq62/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </IconButton>
                <IconButton color="inherit" target='blank' rel="noopener noreferrer" href='https://github.com/Abdullahprogramme'>
                    <FaGithub size={24} />
                </IconButton>
            </div>
            {/* Add more icons as needed */}
        </Box>
    );
}

export default Footer;