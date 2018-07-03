import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { iosEmail } from 'react-icons-kit/ionicons/iosEmail';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import './style.less';

class Network extends Component {
  render() {
    return (
      <div className="network-wrapper">
        <div className="network">
          <div className="social-wrapper">
            <div className="social-icon-wrapper">
              <Icon className="sidebar-email-icon" size={72} icon={iosEmail} />
            </div>

            <div className="social-icon-wrapper">

            </div>

            <div className="social-icon-wrapper">

            </div>

            <div className="social-icon-wrapper">
              <Icon className="sidebar-facebook-icon" size={72} icon={socialFacebook} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Network;
