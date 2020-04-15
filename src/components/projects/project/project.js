import React from 'react';

import './project.css';

const Project = ({ project, isReversed }) => {
  const { title, desc, bgColor, color, image } = project;
  const { url, alt } = image;
  return(
    <div 
      className={`project home-page__card ${isReversed ? 'home-page__card--reversed': null}`}
      style={
        {
          backgroundColor: `var(--${bgColor})`,
          color: `var(--${color})`
        }
      }
    >
      <div className='project__image card__child card__child--whole-width'>
        <img 
          className='bg--image'
          src={url}
          alt={alt}
          />
      </div>
      <div className='project__content card__child card__child--content-padding'>
        <h1 className='project__title'>{title}</h1>
        <div className='project__desc'>{desc}</div>
      </div>
    </div>
  )
}

export default Project;