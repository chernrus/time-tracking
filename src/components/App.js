import React, { Component } from 'react';
import '../styles/App.css';
import TimeTracker from './TimeTracker';

class App extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <TimeTracker/>
      </div>
    );
  }
}

export default App;
