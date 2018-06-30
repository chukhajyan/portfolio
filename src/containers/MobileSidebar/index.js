import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './styles.less';

class MobileSidebar extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Network</a>
      </Menu>
    );
  }
}

export default MobileSidebar;
