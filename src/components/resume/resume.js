import React, { useState } from 'react';

import RESUME from '../../content/content--resume';
import MESSAGES from '../../content/content';
import Option from './resume__option/resume__option';
import './../../shared-styles/card-grid.css';
import './resume.css';

const Resume = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const resumeCopy = RESUME.slice();
  let resumeOptions = resumeCopy.map((job, index) => {
    return(
      <Option 
        onClickAction={() => setActiveIndex(index)} 
        key={index} 
        option={job} 
        isActive={index === activeIndex}/>
    );
  });

  let activeJob = resumeCopy[activeIndex];
  let companyName = activeJob.fullname ? activeJob.fullname : activeJob.company;
  let desc = activeJob.desc.map((line, index) => {
    return(
      <div
        key={index}
        className='resume-content__desc'
      >
        {line}
      </div>
    );
  })

  return (
    <div id='resume' className='home-page__card'>
      <div className='card__child card__child--whole-width resume__options'>
        {resumeOptions}
      </div>
      <div className='card__child card__child--content-padding resume__content'>
        <h1 className='resume-content__title'>{MESSAGES.RESUME.TITLE}</h1>
        <h2 className='resume-content__company-title'><a href={activeJob.site_link}>{companyName}</a></h2>
        {desc}
      </div>
    </div>
  )
};

export default Resume;