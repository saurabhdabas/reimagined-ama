import * as React from "react";
import { Box, Button, Typography, Stack } from '@mui/material';


const GiftBanner: React.FC = () :JSX.Element | null  => {
  return (
  <Stack direction='row'>
    <Box sx={{
      width:'50%',
      backgroundColor:'#E5E5E5',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-around',
      padding:'10px 30px'
      }}>
      <Typography 
      variant="h4"
      sx={{
        color:'#353640',
        margin:'15px'
      }}
      >Earn Rewards this holiday season</Typography>
      <Typography 
        variant="h6"
        sx={{
          color:'#353640',
          margin:'15px'
        }}
      >
        These gifts give back! Earn 5% cash back in reward dollars on your holiday gift-giving with gift cards from AMA.
        <Stack direction='row' sx={{justifyContent: 'space-around',
          alignItems: 'center'}}>
          <img src='https://amaabcaprod.azureedge.net/content/images/illustrations/christmas-tree-family-gift-cards.png' width='300px'/>
          <i>** 70+ Brands</i>
        </Stack>
      </Typography>
      <Button
      href="/membership-join"
      size='large' 
      sx={{
        backgroundColor:'#FFFFFF',
        border:'1px solid #D1011C',
        color:'#D1011C',
        margin:'15px',
      }}>Shop Gift Cards</Button>
    </Box>
    <Box sx={{
      width:'50%',
      backgroundColor:'#07285A',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-around',
      padding:'10px 30px'
      }}>
      <Typography 
      variant="h4"
      sx={{
        color:'#FFFFFF',
        margin:'15px'
      }}
      >Gift A Membership</Typography>
      <Typography 
        variant="h6"
        sx={{
          color:'#FFFFFF',
          margin:'15px'
        }}
      >
        We’ll waive the $20 registration fee and make a $10 donation to local food banks for every new gift membership.<br/>
        <Stack direction='row' sx={{justifyContent: 'space-around',
          alignItems: 'center'}}>
          <img src='https://amaabcaprod.azureedge.net/content/images/membership/gift-memberships-save-20.png' width='300px'/>
          <i>** Offer Expires December 31</i>
        </Stack>
      </Typography>
      <Button
      href="/membership-fuel-savings"
      size='large'
      sx={{
        backgroundColor:'#FFFFFF',
        border:'1px solid #D1011C',
        color:'#D1011C',
        margin:'15px',
      }}>Check Gift Memberships</Button>
    </Box>
  </Stack>  
  );
};

export default GiftBanner;