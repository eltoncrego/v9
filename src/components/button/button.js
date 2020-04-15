import React from 'react';

import MESSAGES from '../../constants/content';
import './button.css';

const Button = ({ text, onClickAction }) => {
  const { BUTTON_TEXT } = MESSAGES.DEFAULTS;
  return (
    <div 
      className='btn'
      onClick={() => onClickAction ? onClickAction() : null}
    >
      <span className='btn__text'>{text ? text : BUTTON_TEXT}</span>
    </div>
  );
};

export default Button;