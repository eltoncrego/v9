import React, { useState } from 'react';

import RESUME from '../../constants/content--resume';
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

  const resumeContent = ({ desc }) => {
    return (
      <div>{desc}</div>
    );
  }

  return (
    <div id='resume' className='home-page__card'>
      <div className='card__child--whole-width resume__options'>
        {resumeOptions}
      </div>
      <div className='card__child--content-padding resume__content'>
        {resumeContent(resumeCopy[activeIndex])}
      </div>
    </div>
  )
};

export default Resume;