import React from 'react';
import { StyledMainSection, StyledPageWrapper } from '../../shared/app-styles';
import {
  StyledHeroSection,
  StyledHeroText,
  StyledProfileImage,
} from './home-styles';

const Home = () => (
  <StyledPageWrapper>
    <StyledMainSection>
      <StyledHeroSection>
        <StyledProfileImage />
        <StyledHeroText>
          <h1>About Me</h1>
          <p>Hello there!</p>
          <p>
            My name is <b>Elton Rego</b> and I'm a <b>Software Engineer</b> at{' '}
            <a href='https://about.linkedin.com'>LinkedIn.</a>
            <p>
              My friends call me <b>Elty</b>.
            </p>
          </p>
          <p>
            I'm based in <b>Oakland, California</b> and specialize in
            developing, implementing, and occasionally designing exceptional
            user interface designs on the web.
          </p>
        </StyledHeroText>
      </StyledHeroSection>
    </StyledMainSection>
  </StyledPageWrapper>
);

export default Home;
