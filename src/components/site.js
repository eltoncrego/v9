import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import withLoaderProvider from './loader/loader-provider';
import Header from './header/header';
import SWESite from './swe/index';
import MusicSite from './music/index';

const history = createBrowserHistory();

const Site = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path='/music'>
          <MusicSite />
        </Route>
        <Route path='/'>
          <SWESite />
        </Route>
      </Switch>
    </Router>
  );
};

export default withLoaderProvider(Site);
