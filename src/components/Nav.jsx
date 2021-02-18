import './Nav.css';
import React from 'react';
import Logo from '../img/eyeOfHorus.jpg'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';



function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHorus" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Horus - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className="navbar-about">About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
