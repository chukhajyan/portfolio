import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './styles.less';

class MobileSidebar extends Component {
  render () {
    return (
      <Menu right>
        <span className="mobile-link-wrapper"><a id="mobile-home" className="menu-item" href="/">Home</a></span>
        <span className="mobile-link-wrapper"><a id="mobile-work" className="menu-item" href="/about">Work</a></span>
        <span className="mobile-link-wrapper"><a id="mobile-network" className="menu-item" href="/contact">Network</a></span>
      </Menu>
    );
  }
}

export default MobileSidebar;
