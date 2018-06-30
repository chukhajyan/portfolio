import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './styles.less';

class MobileSidebar extends Component {
  render () {
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">Work</a>
        <a id="contact" className="menu-item" href="/contact">Network</a>
      </Menu>
    );
  }
}

export default MobileSidebar;
