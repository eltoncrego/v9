import React from 'react';

import './resume__option.css';

const Option = ({ option, onClickAction, isActive }) => {
  return (
    <div className={`option ${isActive ? 'option--active': ''}`} onClick={() => onClickAction()}>
      <h1>{option.title} <a href={option.site_link}>@{option.company}.</a></h1>
      <div className='option__text--secondary'>{option.time}</div>
      <div className='option__text--secondary'>{option.location}</div>
    </div>
  )
};

export default Option;