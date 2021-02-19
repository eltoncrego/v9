import React from 'react';
import NavLinks from '../../shared/components/nav-links/nav-links';
import {
  StyledMainSection,
  StyledPageWrapper,
} from '../../shared/styles/app-styles';

const Home = () => (
  <StyledPageWrapper>
    <StyledMainSection>
      <h1>Elton Christopher Rego.</h1>
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
    <StyledMainSection>
      <h2>Some useful links.</h2>
      <NavLinks />
    </StyledMainSection>
  </StyledPageWrapper>
);

export default Home;
