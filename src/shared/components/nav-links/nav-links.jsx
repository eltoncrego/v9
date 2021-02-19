import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationRoutes, RoutePaths } from '../../../app/routes/routes';
import {
  StyledNavigationItem,
  StyledNavigationLinks,
  StyledNavigationLink,
} from './nav-links-styles';

const NavLinks = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav>
      <StyledNavigationLinks>
        {Object.keys(NavigationRoutes).map(routeKey => (
          <StyledNavigationItem
            key={routeKey}
            isCurrentPath={currentPath === RoutePaths[routeKey]}
          >
            <StyledNavigationLink to={RoutePaths[routeKey]}>
              {NavigationRoutes[routeKey]}
            </StyledNavigationLink>
          </StyledNavigationItem>
        ))}
      </StyledNavigationLinks>
    </nav>
  );
};
export default NavLinks;
