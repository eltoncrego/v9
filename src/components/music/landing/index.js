import React from 'react';
import { MUSIC_MESSAGES } from '../../../content/content';
import './landing.css';

const Landing = () => {
  const { LANDING } = MUSIC_MESSAGES;
  return (
    <div id='landing--music'>
      <div className='music-landing__title'>
        <h1>{LANDING.TITLE}</h1>
        <div className='music-landing__desc-item'>{LANDING.DESC}</div>
        <div className='music-landing__desc-item'>{LANDING.DESC_2}</div>
      </div>
    </div>
  );
};

export default Landing;
