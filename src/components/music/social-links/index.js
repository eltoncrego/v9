import React, { Fragment } from 'react';

const SocialLinks = () => {
  return (
    <Fragment>
      <a
        className='header-with-links__link'
        href='https://instagram.com/eltypls'
      >
        <i class='fab fa-instagram fa-lg'></i>
      </a>
      <a
        className='header-with-links__link'
        href='https://soundcloud.com/eltypls'
      >
        <i class='fab fa-soundcloud fa-lg'></i>
      </a>
    </Fragment>
  );
};

export default SocialLinks;
