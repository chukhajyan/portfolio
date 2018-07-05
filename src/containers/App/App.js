import React, { Component } from 'react';
import Landing from '../Pages/Landing';
import Network from '../Pages/Network';
import Work from '../Pages/Work';
import Sidebar from '../Sidebar';
import MobileSidebar from '../MobileSidebar';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Work />
        <Network />

      {(window.innerWidth > 700) ? <Sidebar /> : <MobileSidebar />}


      </div>
    );
  }
}

export default App;
