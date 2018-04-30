import React, { Component } from 'react';
import Header from './components/Header';
import Taskbar from './components/Taskbar';
import Tasklist from './components/Tasklist';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header /><br/><br/>
        <Taskbar /><br/><br/>
        <Tasklist />
      </div>
    );
  }
}

export default App;
