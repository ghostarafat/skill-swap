import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <niv>
           <NavLink to="/">Home</NavLink> 
              <NavLink to="/login">Login</NavLink>
        </niv>
    );
};

export default Header;