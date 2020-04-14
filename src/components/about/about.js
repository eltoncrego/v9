import React from 'react';

import MESSAGES from './../../constants/messages';
import './about.css';

const About = () => {
  const { ABOUT } = MESSAGES;
  return(
    <div id='about'>
      <div class='about__text'>
        <h1 class='about__text-title'>{ABOUT.TITLE}</h1>
        <span class='about__text-desc'>{ABOUT.DESC}</span>
        <span class='about__text-desc'>{ABOUT.DESC_2}</span>
      </div>
    </div>
  );
}

export default About;