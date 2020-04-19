import React, { useState } from 'react';

import RESUME from '../../content/content--resume';
import Option from './resume-option/resume-option';

const useStateForResume = (initialValue) => {
  const [activeIndex, setActiveIndex] = useState(initialValue);
  return {
    content: RESUME,
    activeIndex,
    setActiveIndex
  };
}

const getSiteLinkFrom = ({ content, activeIndex }) => {
  return content[activeIndex].site_link;
};

const getCompanyNameFrom = ({ content, activeIndex }) => {
  const activeJob = content[activeIndex];
  return activeJob.fullname ? activeJob.fullname : activeJob.company;
};

const getDescFrom = ({ content, activeIndex }) => {
  const activeJob = content[activeIndex];
  return activeJob.desc.map((line, index) => {
    return(
      <div
        key={index}
        className='resume-content__desc'
      >
        {line}
      </div>
    );
  })
};

const getResumeOptionsFrom = ({ content, activeIndex, setActiveIndex }) => {
  return content.map((job, index) => {
    return(
      <Option 
        onClickAction={() => setActiveIndex(index)} 
        key={index} 
        option={job} 
        isActive={index === activeIndex}/>
    );
  });
};

export default {
  useStateForResume,
  getSiteLinkFrom,
  getCompanyNameFrom,
  getDescFrom,
  getResumeOptionsFrom,
};