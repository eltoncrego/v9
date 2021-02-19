import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../routes/routes';
import { StyledHeaderWrapper } from './header-styles';

const Header = () => (
  <StyledHeaderWrapper>
    <Link to={RoutePaths.home}>
      <h1>elton christopher rego.</h1>
    </Link>
  </StyledHeaderWrapper>
);

export default Header;
