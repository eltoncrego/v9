import React from 'react';

import './landing.css';
import MESSAGES from '../../constants/messages';

const Landing = ({nextSection}) => {
  const LANDING = MESSAGES.LANDING;
  

  const scrollToNextSection = () => {
    const next = document.getElementById(nextSection);
    window.scrollTo({
      top: next.offsetTop - 96,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='landing'>
      <div className='landing__text'>
        <div className='landing__lead-in'>
          <div className='text--lead'>{LANDING.LEAD_IN}</div>
        </div>
        <div className='text--uber'>
          <b>{LANDING.TITLE}</b>
        </div>
        <div 
          id="landing__subtitle" 
          className='text--lead landing__subtitle'
        >
          {LANDING.SUB_TITLE} 
          <a href="https://www.gantri.com/">
            {LANDING.COMPANY_LINK}
          </a>
        </div>
        <div 
          id="landing__desc" 
          className='text--lead text--grey'
        >
          {LANDING.DESC}
        </div>
      </div>
      <div 
        id='landing__down-arrow'
        onClick={() => scrollToNextSection()}
      >
        <svg 
          id='down-arrow__icon' 
          width="14px" 
          height="26px" 
          viewBox="0 0 14 26" 
          version="1.1"
        >
          <g 
            transform="translate(-9.000000, -3.000000)" 
            fillRule="nonzero"
          >
            <path d="M17.7482117,22.6668161 L17.7482117,4.857112 C17.7482117,3.83145737 16.9655107,3 16,3 C15.0344893,3 14.2517883,3.83145737 14.2517883,4.857112 L14.2517883,22.6668161 L11.9965951,20.2525705 C11.3110825,19.5243557 10.199647,19.5243557 9.51413444,20.2525705 C8.82862185,20.9807853 8.82862185,22.1614548 9.51413444,22.8896696 L14.7587697,28.4610056 C14.9250311,28.6300782 15.1210842,28.762611 15.3356795,28.8509991 C15.7588165,29.049667 16.2411835,29.049667 16.6643205,28.8509991 C16.8789158,28.762611 17.0749689,28.6300782 17.2412303,28.4610056 L22.4858656,22.8896696 C23.1713781,22.1614548 23.1713781,20.9807853 22.4858656,20.2525705 C21.800353,19.5243557 20.6889175,19.5243557 20.0034049,20.2525705 L17.7482117,22.6668161 Z" id="Path"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Landing;