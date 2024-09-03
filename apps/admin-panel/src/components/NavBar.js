// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin">R Panel</Link>
        </li>
        <li>
          <a href="/">Go to Astro</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
