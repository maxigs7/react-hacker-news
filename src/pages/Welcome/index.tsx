import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <>
      <h1>Welcome Hacker News Lab</h1>
      <Link to="/newstories" className="Button">
        Check new items
      </Link>
    </>
  );
};

export default WelcomePage;
