import React from 'react';
import { MUSIC_MESSAGES } from '../../../content/content';
import './landing.css';

const Landing = () => {
  const { LANDING } = MUSIC_MESSAGES;
  return (
    <div id='landing--music'>
      <div className='music-landing__title'>
        <h1>{LANDING.TITLE}</h1>
        <span>{LANDING.DESC}</span>
      </div>
    </div>
  );
};

export default Landing;
