import React, { Component } from 'react';
import '../styles/App.css';
import SideMenu from './SideMenu';
import MainHeader from './MainHeader';
import TimeTracker from './TimeTracker';

class App extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <SideMenu/>
        <MainHeader title={ 'Time tracker '}/>
        <TimeTracker/>
      </div>
    );
  }
}

export default App;
