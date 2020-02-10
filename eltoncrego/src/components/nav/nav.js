import React from 'react';

import SiteLogo from './../site-logo/site-logo';
import Menu from './../menu/menu';
import './nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <SiteLogo/>
        <Menu/>
      </div>
    );
  }
}