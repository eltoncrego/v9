import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import withLoaderProvider from './loader/loader-provider';
import Header from './header/header';
import SWESite from './swe-index';

const Site = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path='/'>
          <SWESite />
        </Route>
      </Switch>
    </Router>
  );
};

export default withLoaderProvider(Site);
