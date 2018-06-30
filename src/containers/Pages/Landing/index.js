import React, { Component } from 'react';
import Typing from '../../../components/typed';
import Avatar from '../../../components/avatar';
import Particles from 'react-particles-js';
import './style.less';

class Sidebar extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div className="particles-wrapper">
          {window.innerWidth > 700 ? <Particles /> : null}
        </div>

        <div className="landing">
          <Typing />
          <Avatar />

          <div className="about-wrapper">
            <p>
               Contrary to popular belief, Lorem Ipsum is not simply random text.
               It has roots in a piece of classical Latin literature from 45 BC,
               making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
               looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
               and going through the cites of the word in classical literature, discovered the undoubtable source.
               Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
               (The Extremes of Good and Evil) by Cicero, written in 45 BC.
             </p>
           </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
