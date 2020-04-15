import React from 'react';

import PROJECTS from './../../content/content--projects';
import Project from './project/project';

const Projects = () => {
  let projects = PROJECTS.map((project, index) => {
    return(
      <Project 
        key={index} 
        project={project}
        isReversed={index % 2 === 0}
      />
    )
  });

  return (
    <div id='projects'>
      {projects}
    </div>
  );
}

export default Projects;