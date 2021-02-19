import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DigitalResume from '../../pages/digital-resume/digital-resume';
import Home from '../../pages/home/home';
import Header from '../header/header';

export const RoutePaths = {
  home: '/',
  resume: '/digital-resume',
};

export const NavigationRoutes = { resume: 'digital resume' };

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path={RoutePaths.resume}>
        <DigitalResume />
      </Route>
      <Route path={RoutePaths.home}>
        <Home />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
