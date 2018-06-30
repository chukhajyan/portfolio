import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import { iosHome } from 'react-icons-kit/ionicons/iosHome';
import { documentText } from 'react-icons-kit/ionicons/documentText';
import { network } from 'react-icons-kit/ionicons/network';
import './style.less';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="home-icon-wrapper">
            <Icon className="sidebar-home-icon" size={26} icon={iosHome} />
            <p className="home-icon-text">Home</p>
          </div>

          <div className="work-icon-wrapper">
            <Icon className="sidebar-document-icon" size={26} icon={documentText} />
            <p className="work-icon-text">Work</p>
          </div>

          <div className="network-icon-wrapper">
            <Icon className="sidebar-network-icon" size={26} icon={network} />
            <p className="network-icon-text">Network</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
