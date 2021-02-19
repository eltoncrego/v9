import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';
import { StyledRouteContainer } from './animated-route-styles';

const AnimatedRoute = ({ children, path }) => (
  <StyledRouteContainer>
    <Route exact path={path}>
      {({ match }) => (
        <CSSTransition
          in={match !== null}
          timeout={300}
          classNames='page'
          unmountOnExit
        >
          {children}
        </CSSTransition>
      )}
    </Route>
  </StyledRouteContainer>
);

AnimatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export default AnimatedRoute;
