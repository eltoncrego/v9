import React from 'react';

import MESSAGES from '../../content/content';
import utils from './resume-utils';
import './../../shared-styles/card-grid.css';
import './resume.css';

const Resume = () => {
  const resume = utils.useStateForResume(0);
  return (
    <div id='resume' className='home-page__card'>
      <div className='card__child card__child--whole-width resume__options'>
        {utils.getResumeOptionsFrom(resume)}
      </div>
      <div className='card__child card__child--content-padding resume__content'>
        <h1 className='resume-content__title'>{MESSAGES.RESUME.TITLE}</h1>
        <h2 className='resume-content__company-title'><a href={utils.getSiteLinkFrom(resume)}>{utils.getCompanyNameFrom(resume)}</a></h2>
        {utils.getDescFrom(resume)}
      </div>
    </div>
  )
};

export default Resume;