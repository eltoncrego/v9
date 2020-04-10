import React from 'react';

import './landing.css';
import MESSAGES from '../../constants/messages';

const Landing = () => {
  const LANDING = MESSAGES.LANDING;
  return (
    <div className='landing'>
      <div className='landing__lead-in'>
        <div id='lead-in__wave-icon' className='text--lead'>{LANDING.WAVE_ICON}</div>
        <div className='text--lead'>{LANDING.LEAD_IN}</div>
      </div>
      <div className='text--uber'><b>{LANDING.TITLE}</b></div>
      <h2 className='text--grey'>{LANDING.SUB_TITLE}</h2>
      <div className='text--body'>{LANDING.DESC}</div>
    </div>
  );
};

export default Landing;