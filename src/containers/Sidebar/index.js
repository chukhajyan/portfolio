import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { iosHome } from 'react-icons-kit/ionicons/iosHome';
import { briefcase } from 'react-icons-kit/ionicons/briefcase'
import { network } from 'react-icons-kit/ionicons/network';
import ScrollIntoView from 'react-scroll-into-view'
import './style.less';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="home-icon-wrapper">
            <ScrollIntoView selector=".landing-wrapper">
              <li>
                <b>
                  <Icon className="sidebar-home-icon" size={26} icon={iosHome} />
                </b>

                <p>
                  <span>Home</span>
                </p>
              </li>
            </ScrollIntoView>
          </div>

          <div className="work-icon-wrapper">
            <ScrollIntoView selector=".work-wrapper">
              <li>
                <b>
                  <Icon className="sidebar-home-icon" size={26} icon={briefcase} />
                </b>

                <p>
                  <span>Work</span>
                </p>
              </li>
            </ScrollIntoView>
          </div>

          <div className="network-icon-wrapper">
            <ScrollIntoView selector=".network-wrapper">
              <li>
                <b>
                  <Icon className="sidebar-home-icon" size={26} icon={network} />
                </b>

                <p>
                  <span>Network</span>
                </p>
              </li>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
