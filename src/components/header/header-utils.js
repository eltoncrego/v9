import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStateForTransparency = (initialValue) => {
  const [isTransparent, setIsTransparent] = useState(initialValue);

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setIsTransparent(!initialValue);
    } else {
      setIsTransparent(initialValue);
    }
  };
  return isTransparent;
};

const scrollTo = (item) => {
  let scrollHeight = 0;
  if (item !== 'home') {
    let obj = document.getElementById(item);
    scrollHeight = obj.offsetTop - 64;
  }

  window.scrollTo({
    top: scrollHeight,
    behavior: 'smooth',
  });
};

const getHeaderLinks = (content) => {
  return content.map((link, index) => {
    if (link.id) {
      return (
        <div
          key={index}
          className='header__link'
          onClick={() => scrollTo(link.id)}
        >
          {link.text}
        </div>
      );
    }
    if (link.to) {
      return (
        <Link key={index} to={link.to}>
          <div className='header__link'>
            {link.text}
          </div>
        </Link>
      );
    }
    return null;
  });
};

export default {
  useStateForTransparency,
  scrollTo,
  getHeaderLinks,
};
