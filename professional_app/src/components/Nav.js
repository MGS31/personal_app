import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="go-home">
        <Link to="/">
          <img src="/images/Logo.pn" alt="Home" />
        </Link>
      </div>
      <div className="links">
        <Link to="/About">About</Link>
        <Link to="/Project">Projects</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Contact">Contact</Link>
        <Link
          to={'https://www.cakeresume.com/s--8zZSLURFdyuhOyYRUyAZBg--/m-stanks'}
          target="_blank"
        >
          <button>Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
