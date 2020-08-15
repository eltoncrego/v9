import React from 'react';
import { MUSIC_MESSAGES } from '../../../content/content--music';
import './landing.css';
import SocialLinks from '../social-links';

const Landing = () => {
  const { LANDING } = MUSIC_MESSAGES;
  return (
    <div id='landing--music'>
      <div className='music-landing__title'>
        <div className='music-landing__header-with-links'>
          <h1 className='header-with-links__title'>{LANDING.TITLE}</h1>
          <SocialLinks />
        </div>
        <div className='music-landing__desc-item'>{LANDING.DESC}</div>
        <div className='music-landing__desc-item'>{LANDING.DESC_2}</div>
      </div>
    </div>
  );
};

export default Landing;
