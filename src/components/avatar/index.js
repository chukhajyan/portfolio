import React, { Component } from 'react';
import catPhoto from '../../images/Cat-square.gif';
import './style.less';

class Sidebar extends Component {
  render() {
    return (
      <div className="avatar-wrapper">
        <div className="image-circle">
          <img className="avatar" src={catPhoto} alt="Avatar" />
        </div>
        <h3>Levon Chukhajyan</h3>
      </div>
    );
  }
}

export default Sidebar;
