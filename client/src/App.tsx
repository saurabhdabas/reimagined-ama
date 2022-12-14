import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navigation';
import Banner from './components/Banner';
import GiftBanner from './components/GiftBanner';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Merriweather',
      'serif',
    ].join(','),
  }
});

const App = () : JSX.Element =>  {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar 
          logo='../logo.png'
          links={[
            {name:'Membership & Rewards', route:'/membership'},
            {name:'Auto', route:'/auto'},
            {name:'Travel', route:'/travel'},
            {name:'Home & Family', route:'/home-family'},
            {name:'Insurance',route:'/insurance'}
          ]}
        />
        <Banner/>
        <GiftBanner/>
        <Routes/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
