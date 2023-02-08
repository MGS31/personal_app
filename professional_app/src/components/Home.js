import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <p>Hello World! My Name is Matt Stankovich</p>
        <Link to={'https://github.com/MGS31'} target="_blank">
          <button>Check out my GitHub</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
