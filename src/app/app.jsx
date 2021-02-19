import React, { Fragment } from 'react';
import { ApplicationStyles } from '../shared/styles/app-styles';
import { Normalize } from '../shared/styles/normalize-styles';
import { StyledContentWrapper } from './content-wrapper-styles';
import Routes from './routes/routes';

const App = () => (
  <Fragment>
    <Normalize />
    <ApplicationStyles />
    <StyledContentWrapper>
      <Routes />
    </StyledContentWrapper>
  </Fragment>
);

export default App;
