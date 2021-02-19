import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RoutePaths } from '../routes/routes';
import { StyledHeaderWrapper } from './header-styles';

const Header = () => {
  const location = useLocation();
  return location.pathname === RoutePaths.home ? null : (
    <StyledHeaderWrapper>
      <Link to={RoutePaths.home}>
        <h1>elton christopher rego.</h1>
      </Link>
    </StyledHeaderWrapper>
  );
};

export default Header;
