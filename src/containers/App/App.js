import React, { Component } from 'react';
import Landing from '../Pages/Landing';
import Sidebar from '../Sidebar';
import MobileSidebar from '../MobileSidebar';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />

      {(window.innerWidth > 700) ? <Sidebar /> : <MobileSidebar />}


      </div>
    );
  }
}

export default App;
