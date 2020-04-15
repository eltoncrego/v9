import React, { useState } from 'react';

import RESUME from '../../constants/content--resume';
import MESSAGES from '../../constants/content';
import Option from './option/option';
import './../shared/styles/card-grid.css';
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
  let desc = activeJob.desc.map((line) => {
    return(
      <div className='resume-content__desc'>{line}</div>
    );
  })

  return (
    <div id='resume' className='home-page__card'>
      <div className='card__child--whole-width resume__options'>
        {resumeOptions}
      </div>
      <div className='card__child--content-padding resume__content'>
        <h1>{MESSAGES.RESUME.TITLE}</h1>
        <h2 className='resume-content__company-title'>{companyName}</h2>
        {desc}
      </div>
    </div>
  )
};

export default Resume;