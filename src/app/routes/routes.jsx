import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DigitalResume from '../../pages/digital-resume/digital-resume';
import Home from '../../pages/home/home';
import Header from '../header/header';
import AnimatedRoute from './animated-route/animated-route';

export const RoutePaths = {
  home: '/',
  resume: '/digital-resume',
};

export const NavigationRoutes = { home: 'About Me', resume: 'Digital Resume' };

const Routes = () => (
  <Router>
    <Header />
    <AnimatedRoute path={RoutePaths.resume}>
      <DigitalResume />
    </AnimatedRoute>
    <AnimatedRoute path={RoutePaths.home}>
      <Home />
    </AnimatedRoute>
  </Router>
);
export default Routes;
