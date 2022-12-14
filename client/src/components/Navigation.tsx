import * as React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from '@mui/material';

interface INavBarProps {
  logo: string,
  links: {
    name: string,
    route: string
  }[]
}

const NavBar: React.FC<INavBarProps> = ({logo, links}) :JSX.Element | null  => {
  
  return (
    <AppBar position='static'>
      <Toolbar 
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-around',
        }}
        style={{backgroundColor:'#FFFFFF', padding:'20px 0px', borderTop:'solid 5px #D1011C'}}>
        <NavLink to="/">
          <img src ={logo} alt='brand-logo' height='60px'/>
        </NavLink>
        {links.map((link, index) => (
          <NavLink 
            key={index} 
            to={link.route}
            style={{
              textDecoration:'none', 
              color:'#353640', 
              fontWeight:'bold'
            }}
          >{link.name}</NavLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
