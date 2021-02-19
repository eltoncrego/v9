import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../../shared/components/nav-links/nav-links';
import { RoutePaths } from '../routes/routes';
import { StyledHeaderWrapper } from './header-styles';

const Header = () => (
  <StyledHeaderWrapper>
    <Link to={RoutePaths.home}>
      <h1>elton christopher rego.</h1>
    </Link>
    <NavLinks />
  </StyledHeaderWrapper>
);

export default Header;
