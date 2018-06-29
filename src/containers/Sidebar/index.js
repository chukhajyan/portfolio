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
          <Icon className="sidebar-home-icon" size={26} icon={iosHome} />
          <Icon className="sidebar-document-icon" size={26} icon={documentText} />
          <Icon className="sidebar-network-icon" size={26} icon={network} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
