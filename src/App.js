import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Button, Card, CardContent, CardMedia, IconButton, Link, List, ListItem, ListItemText } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InfoIcon from '@mui/icons-material/Info';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position='fixed' >
        <Box sx={{ borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} variant="fullWidth" textColor='inherit' indicatorColor="primary" >
            <Tab label={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><InfoIcon />About me</div>} {...a11yProps(0)} sx={{
              fontWeight: 'bold',
            }} />
            <Tab label={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><PsychologyIcon />Skills</div>} {...a11yProps(1)} sx={{
              fontWeight: 'bold',
            }} />
            <Tab label={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><AssignmentIcon />Projects</div>} {...a11yProps(2)} sx={{
              fontWeight: 'bold',
            }} />
          </Tabs>
        </Box>
      </AppBar>
      <div style={{
        marginTop: '50px'
      }}>
        <CustomTabPanel value={value} index={0}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginLeft: '12px' }}>
            <div style={{ width: '45%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant='h3'>
                  Hi! I am Thierry
                </Typography>
                <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                  A computer science student and a DevOps wannabe
                </Typography>
              </div>
              <Typography sx={{ textAlign: 'justify' }}>
                <List>
                  <ListItem>

                    <ListItemText sx={{ textAlign: 'justify' }} primary="As a student majoring in general computing, I am able to do well in app developpement and operational tasks." />

                  </ListItem>
                  <ListItem>

                    <ListItemText sx={{ textAlign: 'justify' }} primary="So, I have grown a great interest in becoming a DevOps engineer to help simplify the tiring task of deploying and re-deploying after some changes has been made." />

                  </ListItem>
                  <ListItem>

                    <ListItemText sx={{ textAlign: 'justify' }} primary="I am a linux enthousiastic, a network fanatic and I really enjoy troubleshooting as it helps me enlarge my knowledge, my skills and my experiences." />

                  </ListItem>
                </List>
              </Typography>
              <Typography sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button variant='contained'>
                  <EmailIcon />
                  Contact me
                </Button>
                <Button variant='outlined'>
                  <FileDownloadIcon />
                  Get my resume
                </Button>
              </Typography>
              <Typography sx={{ marginTop: '12px' }}>
                <Typography>
                  Let's check up on LinkedIn, Facebook, or WhatsApp for any eventual work and collaboration
                </Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <a href='https://www.linkedin.com/in/thierry-micha%C3%ABl-7b8a71251' style={{ textDecoration: 'none', color: 'blue' }} ><Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', margin: 0.5 }}><LinkedInIcon /><Typography>Thierry Michael</Typography></Typography></a>
                  <a href='https://www.facebook.com/profile.php?id=100083407817568' style={{ textDecoration: 'none', color: 'blue' }}><Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', margin: 0.5 }}><FacebookIcon /><Typography>Thierry Michael</Typography></Typography></a>
                  <a href='https://wa.me/261348835957' style={{ textDecoration: 'none', color: 'blue' }}><Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', margin: 0.5 }}><WhatsAppIcon /><Typography>+261348835957</Typography></Typography></a>
                </Typography>
              </Typography>
            </div>
            <div style={{ width: '45%' }}>
              <img src='/me.jpg' alt='me' width='500px' height='500px' />
            </div>

          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </div>
    </Box>
  );
}
