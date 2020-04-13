import React from 'react';

import './landing.css';
import MESSAGES from '../../constants/messages';

const Landing = () => {
  const LANDING = MESSAGES.LANDING;
  return (
    <div className='landing'>
      <div className='landing__text'>
        <div className='landing__lead-in'>
          <div className='text--lead'>{LANDING.LEAD_IN}</div>
        </div>
        <div className='text--uber'><b>{LANDING.TITLE}</b></div>
        <div id="landing__subtitle" className='text--lead text--grey landing__subtitle'>{LANDING.SUB_TITLE} <a href="https://www.gantri.com/">{LANDING.COMPANY_LINK}</a></div>
        <div id="landing__desc" className='text--lead text--grey'>{LANDING.DESC}</div>
      </div>
    </div>
  );
};

export default Landing;