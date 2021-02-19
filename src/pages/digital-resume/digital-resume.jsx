import React from 'react';
import {
  StyledMainSection,
  StyledPageWrapper,
  StyledSecondarySection,
} from '../../shared/styles/app-styles';

const DigitalResume = () => (
  <StyledPageWrapper>
    <StyledMainSection>
      <h1>My Digital Resume.</h1>
      <StyledSecondarySection>
        <p>
          My life goal is to provide positive impact to the world. I'm very
          fortunate to say that as a front-end engineer at LinkedIn, I have the
          opportunity to do that by creating high-quality software that is
          aiming to remove bias from hiring processes across the world in favor
          of skill based hiring.
        </p>
        <p>
          The best part about working in the technology industry is the ability
          to constantly learn new things and be surprised every day. Daily
          evolution and improvement are some of my personal beliefs and I
          consider myself lucky to be able to work in a field that allows me to
          live it. I’m a person who hates to say no to new experiences, new
          knowledge, and new people and ideas to connect with.
        </p>
        <p>
          In my free time, I enjoy cooking; writing, playing and listening to
          music; and reading.
        </p>
      </StyledSecondarySection>
      <h2>Work Experience</h2>
      <StyledSecondarySection>
        <h3>
          Software Engineer at{' '}
          <a href='https://about.linkedin.com'>LinkedIn.</a>
        </h3>
        <h4>November 2020 - Present</h4>
      </StyledSecondarySection>
    </StyledMainSection>
  </StyledPageWrapper>
);

export default DigitalResume;
