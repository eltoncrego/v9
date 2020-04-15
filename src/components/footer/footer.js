import React from 'react';

import './footer.css';
import MESSAGES from '../../constants/content';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footer__copy'>{ MESSAGES.FOOTER.PREFIX } &#169; { MESSAGES.FOOTER.COPY }</div>
    </div>
  );
};

export default Footer;