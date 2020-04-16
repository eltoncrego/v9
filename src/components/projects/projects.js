import React from 'react';

import PROJECTS from './../../content/content--projects';
import Project from './project/project';
import './projects.css';

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
      <div class='projects__title'>Projects that I've Worked On</div>
      {projects}
    </div>
  );
}

export default Projects;