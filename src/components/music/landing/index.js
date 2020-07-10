import React from 'react';
import { MUSIC_MESSAGES } from '../../../content/content';
import './landing.css';

const Landing = () => {
  const { LANDING } = MUSIC_MESSAGES;
  return (
    <div id='landing--music'>
      <div className='music-landing__title'>
        <h1>Music</h1>
        <span className='music-landing__desc'>{LANDING.DESC}</span>
      </div>
    </div>
  );
};

export default Landing;
