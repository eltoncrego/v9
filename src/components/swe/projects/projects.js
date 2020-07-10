import React from 'react';

import PROJECTS from './../../content/content--projects';
import getProjects from './projects-utils';
import './projects.css';

const Projects = () => {
  return (
    <div id='projects'>
      <div className='projects__title'>Projects that I've Worked On</div>
      {getProjects(PROJECTS)}
    </div>
  );
}

export default Projects;