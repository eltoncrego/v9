import React from 'react';

import MESSAGES from './../../constants/messages';
import './about.css';

const About = () => {
  const { ABOUT } = MESSAGES;
  return(
    <div id='about'>
      <div className='about__text'>
        <h1 className='about__text-title'>{ABOUT.TITLE}</h1>
        <span className='about__text-desc'>{ABOUT.DESC}</span>
        <span className='about__text-desc'>{ABOUT.DESC_2}</span>
      </div>
    </div>
  );
};

export default About;