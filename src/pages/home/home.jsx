import React from 'react';
import { homeContent } from '../../content/pages/home';

const Home = () => {
  const content = homeContent['en_us'];
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <p>{content.description_1}</p>
      <p>{content.disclaimer}</p>
    </div>
  );
};

export default Home;
