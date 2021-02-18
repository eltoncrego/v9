import React, { Fragment } from 'react';
import { ApplicationStyles } from '../shared/app-styles';
import { Normalize } from '../shared/normalize-styles';
import { StyledContentWrapper } from './content-wrapper-styles';
import Header from './header/header';

const App = () => (
  <Fragment>
    <Normalize/>
    <ApplicationStyles/>
    <StyledContentWrapper>
      <Header/>
    </StyledContentWrapper>
  </Fragment>
);

export default App;