import React, { Component } from 'react';
import Typed from 'react-typed';
import './style.less';

class Typing extends Component {
  render() {
    return (
      <div className="typing-component">
        <Typed
          strings={['Here you can find anything.', 'Here you can create anything.']}
          typeSpeed={25}
          loop
        />
      </div>
    );
  }
}

export default Typing;
