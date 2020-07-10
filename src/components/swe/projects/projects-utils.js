import React from 'react';

import Project from './project/project';

const getProjects = (content) => {
  return content.map((project, index) => {
    return(
      <Project 
        key={index} 
        project={project}
        isReversed={index % 2 === 0}
      />
    )
  });
}

export default getProjects;