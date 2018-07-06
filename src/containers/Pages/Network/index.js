import React, { Component } from 'react';
import './style.less';

class Network extends Component {
  render() {
    return (
      <div className="network-wrapper">
        <div className="network">
          <div className="social-wrapper">
            <span className="social-link-wrapper">
              <a href="mailto:levon.chukhajyan@gmail.com" className="social-links" alt="Gmail" target="_blank" rel="noopener noreferrer">
              {/*  <div className="social-icon-wrapper social-icon-wrapper-email">
                  <Icon className="social-email-icon" size={24} icon={androidMail} />
                </div> */}
                Email
              </a>
            </span>

            <span className="social-link-wrapper">
              <a href="https://twitter.com/chukhajyan" className="social-links" alt="Twitter" target="_blank" rel="noopener noreferrer">
              {/*  <div className="social-icon-wrapper social-icon-wrapper-twitter">
                  <Icon className="social-twitter-icon" size={24} icon={socialTwitter} />
                </div> */}
                Twitter
              </a>
            </span>

            <span className="social-link-wrapper">
              <a href="https://www.linkedin.com/in/chukhajyan/" className="social-links" alt="LinkedIn" target="_blank" rel="noopener noreferrer">
              {/* }<div className="social-icon-wrapper social-icon-wrapper-linkedin" >
                    <Icon className="social-linkedin-icon" size={24} icon={socialLinkedin} />
                </div> */}
                LinkedIn
              </a>
            </span>

            <span className="social-link-wrapper">
              <a href="https://www.facebook.com/levon.chukhajyan" className="social-links" alt="Facebook" target="_blank" rel="noopener noreferrer">
              {/*  <div className="social-icon-wrapper social-icon-wrapper-facebook">
                  <Icon className="social-facebook-icon" size={24} icon={socialFacebook} />
                </div> */}

                Facebook
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Network;
