import React from 'react';

import SiteLogo from './site-logo/site-logo';

export default class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <SiteLogo/>
      </div>
    );
  }
}