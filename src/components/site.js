import React from 'react';
import Landing from './landing/landing';
import About from './about/about';

const Site = () => {
  return (
    <div>
      <Landing nextSection='about'></Landing>
      <About></About>
    </div>
  );
};

export default Site;
