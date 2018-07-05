import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { androidMail } from 'react-icons-kit/ionicons/androidMail';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';
import './style.less';

class Network extends Component {
  render() {
    return (
      <div className="network-wrapper">
        <div className="network">
          <div className="social-wrapper">
            <a href="mailto:levon.chukhajyan@gmail.com" alt="Gmail" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-wrapper social-icon-wrapper-email">
                <Icon className="social-email-icon" size={24} icon={androidMail} />
              </div>
            </a>

            <a href="https://twitter.com/chukhajyan" alt="Twitter" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-wrapper social-icon-wrapper-twitter">
                <Icon className="social-twitter-icon" size={24} icon={socialTwitter} />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/chukhajyan/" alt="LinkedIn" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-wrapper social-icon-wrapper-linkedin" >
                  <Icon className="social-linkedin-icon" size={24} icon={socialLinkedin} />
              </div>
            </a>

            <a href="https://www.facebook.com/levon.chukhajyan" alt="Facebook" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-wrapper social-icon-wrapper-facebook">
                <Icon className="social-facebook-icon" size={24} icon={socialFacebook} />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Network;
