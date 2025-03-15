import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Contact = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Navigation Bar */}


      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/profile">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>

          <h1 className="text-2xl font-bold text-white">Contact US</h1>
        </div>
      </nav>


      {/* Contact Information */}
      <Box>
        {/* Contact Details */}
        <Box sx={{ p: 3 }}>
          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemIcon>
                <HomeIcon fontSize="large" sx={{ color: 'rgb(33,54,68)' }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6">Address</Typography>}
                secondary={
                  <Typography variant="body1" sx={{ mt: 0.5 }}>
                    Ashulia, Savar,<br />
                    Dhaka.
                  </Typography>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemIcon>
                <PhoneIcon fontSize="large" sx={{ color: 'rgb(33,54,68)' }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6">Phone Number</Typography>}
                secondary={
                  <Typography
                    variant="body1"
                    component="a"
                    href="tel:+8801234567890"
                    sx={{
                      mt: 0.5,
                      color: 'blue',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    +88 01880404566
                  </Typography>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemIcon>
                <EmailIcon fontSize="large" sx={{ color: 'rgb(33,54,68)' }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6">Email</Typography>}
                secondary={
                  <Typography
                    variant="body1"
                    component="a"
                    href="mailto:contact@example.com"
                    sx={{
                      mt: 0.5,
                      color: 'blue',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    nasir@gmail.com
                  </Typography>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem>
              <ListItemIcon>
                <BusinessIcon fontSize="large" sx={{ color: 'rgb(33,54,68)' }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h6">Business Hours</Typography>}
                secondary={
                  <Typography variant="body1" sx={{ mt: 0.5 }}>
                    sunday - Friday
                  </Typography>
                }
              />
            </ListItem>
          </List>

        </Box>

        {/* <Box sx={{ width: '100%' }}>
          <iframe style={{ width: '100%', height: '300px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14599.600557707927!2d90.4335647!3d23.8221498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72228136e5d%3A0x6dcc2b981cd155e7!2sPosh%20Coder!5e0!3m2!1sen!2sbd!4v1711269110217!5m2!1sen!2sbd"></iframe>

        </Box> */}
      </Box>
    </Box>
  );
};

export default Contact;