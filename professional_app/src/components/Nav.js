import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../styles/Nav.scss';

const LinkStyles = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  return (
    <div className="nav">
      <div className="go-home">
        <LinkStyles to="/">
          <img src="/images/Logo.pn" alt="Home" />
        </LinkStyles>
      </div>
      <div className="links">
        <LinkStyles to="/About">About</LinkStyles>
        <LinkStyles to="/Project">Projects</LinkStyles>
        <LinkStyles to="/Experience">Experience</LinkStyles>
        <LinkStyles to="/Contact">Contact</LinkStyles>
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
