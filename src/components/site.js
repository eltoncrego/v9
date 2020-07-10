import React, { Fragment } from 'react';
import withLoaderProvider from './loader/loader-provider'
import Header from './header/header';
import SWESite from './swe-index';

const Site = () => {
  return (
    <Fragment>
      <Header />
      <SWESite />
    </Fragment>
  );
};

export default withLoaderProvider(Site);
