import React, { Component } from 'react';
import Landing from '../Pages/Landing';
import Sidebar from '../Sidebar';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Sidebar />

      </div>
    );
  }
}

export default App;
