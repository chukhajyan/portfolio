import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import ScrollIntoView from 'react-scroll-into-view';
import './styles.less';

class MobileSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
   this.setState({menuOpen: state.isOpen})
 }

 closeMenu () {
   this.setState({menuOpen: false})
 }

 toggleMenu () {
   this.setState({menuOpen: !this.state.menuOpen})
 }

  render () {
    return (
      <Menu right
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            customBurgerIcon={ !this.state.menuOpen ?
                            <div className="menu-icon-wrapper">
                              <span className="menu-icon-item"> </span>
                              <span className="menu-icon-item"> </span>
                              <span className="menu-icon-item"> </span>
                            </div>
                              :
                              <div className="menu-icon-wrapper-cross">
                                <span className="menu-cross-icon-item menu-cross-icon-item-1"> </span>
                                <span className="menu-cross-icon-item menu-cross-icon-item-2"> </span>
                                <span className="menu-cross-icon-item menu-cross-icon-item-3"> </span>
                              </div>
                            }
            >
        <span className="mobile-link-wrapper">
          <ScrollIntoView selector=".landing-wrapper">
            <a id="mobile-home" className="menu-item" onClick={() => this.closeMenu()}>Home</a>
          </ScrollIntoView>
        </span>

        <span className="mobile-link-wrapper">
          <ScrollIntoView selector=".work-wrapper">
            <a id="mobile-work" className="menu-item" onClick={() => this.closeMenu()}>Work</a>
          </ScrollIntoView>
        </span>

        <span className="mobile-link-wrapper">
          <ScrollIntoView selector=".network-wrapper">
            <a id="mobile-network" className="menu-item" onClick={() => this.closeMenu()}>Network</a>
          </ScrollIntoView>
        </span>

      </Menu>
    );
  }
}

export default MobileSidebar;
