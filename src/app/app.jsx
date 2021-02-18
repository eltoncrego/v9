import React, { Fragment } from 'react';
import { ApplicationStyles } from '../shared/app-styles';
import { Normalize } from '../shared/normalize-styles';
import { StyledContentWrapper } from './content-wrapper-styles';
import Header from './header/header';
import Routes from './routes/routes';

const App = () => (
  <Fragment>
    <Normalize />
    <ApplicationStyles />
    <StyledContentWrapper>
      <Routes>
        <Header />
      </Routes>
    </StyledContentWrapper>
  </Fragment>
);

export default App;
