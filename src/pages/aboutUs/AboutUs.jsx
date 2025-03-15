import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Divider,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    { name: "Sarah Johnson", role: "CEO & Founder", years: 8 },
    { name: "David Lee", role: "Chief Technology Officer", years: 6 },
    { name: "Mina Rahman", role: "Marketing Director", years: 5 },
  ];

  // Company stats
  const stats = [
    { label: "Years in Business", value: "10+" },
    { label: "Clients Served", value: "500+" },
    { label: "Projects Completed", value: "1200+" },
    { label: "Team Members", value: "25" },
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pb: 4 }}>
      <nav className="bg-[rgb(33,54,68)] py-3">
        <div className="p-2 flex flex-wrap items-center justify-start gap-10 max-w-screen-xl px-4 mx-auto">
          <Link to="/profile">
            <a href="">
              <i className="fa-solid fa-chevron-left text-3xl text-white"></i>
            </a>
          </Link>

          <h1 className="text-2xl font-bold text-white">About Us</h1>
        </div>
      </nav>

      {/* Main Content */}
      <Container maxWidth="md">
        {/* Company Overview */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            mb: 3, mt: 4
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderBottom: '1px solid lightgrey'
            }}
          >
            <InfoIcon />
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              Company Overview
            </Typography>
          </Box>

          <Box sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
              Founded in 2015, we are a leading technology solutions provider based in Dhaka, Bangladesh.
              Our company specializes in creating innovative digital products and services that help businesses
              transform their operations and enhance customer experiences.
            </Typography>
            <Typography variant="body1">
              With a team of experienced professionals and a commitment to excellence, we've successfully
              delivered hundreds of projects across various industries, including e-commerce, healthcare,
              finance, and education.
            </Typography>
          </Box>
        </Paper>

        {/* Our Mission */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            mb: 3
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderBottom: '1px solid lightgrey'
            }}
          >
            <HistoryIcon />
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              Our Mission
            </Typography>
          </Box>

          <Box sx={{ p: 3 }}>
            <Typography variant="body1" paragraph>
              Our mission is to empower businesses through technology by providing reliable,
              scalable, and innovative solutions that address their unique challenges and opportunities.
            </Typography>
            <Typography variant="body1">
              We are committed to fostering long-term partnerships with our clients, understanding their
              business needs, and delivering solutions that drive growth and operational efficiency.
            </Typography>
          </Box>
        </Paper>

        {/* Company Stats */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h4" sx={{ color: 'rgb(33,54,68)', fontWeight: 'bold' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Our Team */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            mb: 3
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderBottom: '1px solid lightgrey'
            }}
          >
            <GroupsIcon />
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              Our Leadership Team
            </Typography>
          </Box>

          <Box sx={{ p: 3 }}>
            <Stack spacing={2}>
              {teamMembers.map((member, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.role}
                      </Typography>
                    </Box>
                    <Chip
                      size="small"
                      label={`${member.years} years`}
                      sx={{ bgcolor: 'rgb(33,54,68)', color: 'white' }}
                    />
                  </Box>
                  {index < teamMembers.length - 1 && <Divider sx={{ mt: 1 }} />}
                </Box>
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Our Services */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderBottom: '1px solid lightgrey'
            }}
          >
            <BusinessCenterIcon />
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              Services We Provide
            </Typography>
          </Box>

          <Box sx={{ p: 3 }}>
            <Grid container spacing={2}>
              {['Cashup DPS', 'Cashuop loan', 'Monthly Profit', 'Daily Profit', 'Compounding Profit', 'Cash Withdraw'].map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card variant="outlined" sx={{ borderRadius: 2, borderColor: 'rgb(33,54,68,0.3)' }}>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                        {service}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;