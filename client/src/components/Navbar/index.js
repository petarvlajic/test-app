import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../img/asioso-logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [content, setContent] = useState('Home');

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" srcset="" />
      </Link>
      <nav>
        <ul>
          <li onClick={() => setContent('House')}>{content}</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <i class="fas fa-bars fa-2x"></i>
      </nav>
    </header>
  );
};

export default Navbar;
