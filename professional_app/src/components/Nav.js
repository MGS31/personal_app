import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/Home">
        <img src="/images/Logo.png" alt="Matt's Logo" />
      </Link>
      <Link to="/About">About</Link>
      <Link to="/Project">Projects</Link>
      <Link to="/Experience">Experience</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
};

export default Nav;
