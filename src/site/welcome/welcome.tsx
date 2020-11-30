import * as React from 'react';
import { StyledAppPage, StyledSubTitle } from '../../shared/styles/layout';

export interface WelcomePageProps {}

const WelcomePage = (props: WelcomePageProps) => (
  <StyledAppPage>
    <h1>Elton Christpher Rego</h1>
    <StyledSubTitle>Front-End Software Engineer</StyledSubTitle>
    <p>I'm currently working on a new version for this site. Sit tight!</p>
  </StyledAppPage>
);

export default WelcomePage;
