import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from '../../shared/components/nav-links/nav-links';
import { RoutePaths } from '../routes/routes';
import { StyledHeaderWrapper } from './header-styles';

const Header = () => {
  const location = useLocation();
  return location.pathname === RoutePaths.home ? null : (
    <StyledHeaderWrapper>
      <Link to={RoutePaths.home}>
        <h1>elton christopher rego.</h1>
      </Link>
      <NavLinks />
    </StyledHeaderWrapper>
  );
};

export default Header;
