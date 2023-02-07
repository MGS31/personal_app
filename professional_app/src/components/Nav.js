import React from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
        <About />
        </li>
        <li>
         <Contact />
        </li>
        <li>
         <Project />
        </li>
      </ul>
    </div>
  )
}

export default Nav
