import React from 'react';

import MESSAGES from './../../constants/messages';
import './landing.css';

const Landing = () => {
  const { LANDING } = MESSAGES;
  return (
    <div id='landing'>
      <div className='landing__hero'>
        <h1 className='landing__lead-in'>{LANDING.LEAD_IN}</h1>
        <h2 className='landing__title'>{LANDING.TITLE}</h2>
        <h2 className='landing__subtitle'>{LANDING.SUB_TITLE} 
          <a href="https://www.gantri.com/">{LANDING.COMPANY_LINK}</a>
        </h2>
        <span className='landing__desc'>{LANDING.DESC}</span>
      </div>
    </div>
  );
};

export default Landing;