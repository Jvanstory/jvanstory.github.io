import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cool-lines">Cool Lines</Link>
      <Link to="/Resume">Resume</Link>
      <Link to="/about">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
};

export default Navbar;