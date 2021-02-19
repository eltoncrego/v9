import React from 'react';
import {
  StyledMainSection,
  StyledPageWrapper,
} from '../../shared/app-styles';

const Home = () => (
  <StyledPageWrapper>
    <StyledMainSection>
      <p>
        My name is <b>Elton Rego</b> and I'm a <b>Software Engineer</b> at{' '}
        <a href='https://about.linkedin.com'>LinkedIn.</a>
      </p>
      <p>
        I'm based in <b>Oakland, California</b> and specialize in developing,
        implementing, and occasionally designing exceptional user interface
        designs on the web.
      </p>
      <p>
        I am currently in the process of revamping my personal website in the
        hopes of creating a more streamlined, modern look and feel. Please check
        back soon.
      </p>
    </StyledMainSection>
  </StyledPageWrapper>
);

export default Home;