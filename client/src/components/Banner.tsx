import * as React from "react";
import { Box, Button, Typography, Stack } from '@mui/material';


const Banner: React.FC = () :JSX.Element | null  => {
  return (
  <Stack direction='row'>
    <Box sx={{
      width:'50%',
      backgroundColor:'#E5E5E5',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      padding:'10px'
      }}>
      <Typography 
      variant="h4"
      sx={{
        color:'#353640',
        margin:'15px'
      }}
      >Find the membership that fit your needs</Typography>
      <Typography 
        variant="h6"
        sx={{
          color:'#353640',
          margin:'15px'
        }}
      >
        Protection & Peace of Mind Across North America
      </Typography>
      <Button
      href="/membership-join"
      size='large' 
      sx={{
        backgroundColor:'#FFFFFF',
        border:'1px solid #D1011C',
        color:'#D1011C',
        margin:'15px',
      }}>Join AMA</Button>
    </Box>
    <Box sx={{
      width:'50%',
      backgroundColor:'#07285A',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      padding:'10px'
      }}>
      <Typography 
      variant="h4"
      sx={{
        color:'#F6F6F6',
        margin:'15px'
      }}
      >We can help you save your money</Typography>
      <Typography 
        variant="h6"
        sx={{
          color:'#F6F6F6',
          margin:'15px'
        }}
      >
        Members Save 3¢/L on Fuel & More at Shell <img src='https://1000logos.net/wp-content/uploads/2017/06/Shell-Logo.png' width='25px'/> Gas stations
      </Typography>
      <Button
      href="/membership-fuel-savings"
      size='large'
      sx={{
        backgroundColor:'#FFFFFF',
        border:'1px solid #D1011C',
        color:'#D1011C',
        margin:'15px',
      }}>Save Now</Button>
    </Box>
  </Stack>  
  );
};

export default Banner;