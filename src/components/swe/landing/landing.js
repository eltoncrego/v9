import React from 'react';

import MESSAGES from '../../../content/content';
import Button from '../../button/button';
import './landing.css';

const Landing = ({ onLoadAction }) => {
  const { LANDING, LINKS } = MESSAGES;
  return (
    <div id='landing'>
      <img 
        className='bg--image' 
        src={LANDING.IMG}
        alt={LANDING.IMG_ALT_TEXT}
        onLoad={() => onLoadAction ? onLoadAction() : null}
      />
      <div className='landing__hero above-bg'>
        <h1 className='landing__lead-in'>{LANDING.LEAD_IN}</h1>
        <h2 className='landing__title'>{LANDING.TITLE}</h2>
        <h2 className='landing__subtitle'>{LANDING.SUB_TITLE} 
          <a href={LINKS.GANTRI}>{LANDING.COMPANY_LINK}.</a>
        </h2>
        <span className='landing__desc'>{LANDING.DESC}</span>
        <Button 
          text={LANDING.CTA_BUTTON}
          onClickAction={() => window.open(LINKS.EMAIL)}
        />
      </div>
    </div>
  );
};

export default Landing;