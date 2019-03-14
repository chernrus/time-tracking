import React, { Component } from 'react';
import '../styles/App.css';
import SideMenu from './SideMenu';
import MainHeader from './MainHeader';
import TimeTracker from './TimeTracker';

class App extends Component {

  constructor() {
    super();
    this.mainContainer = React.createRef();
    this.mainHeader = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <SideMenu main={this.mainContainer} header={this.mainHeader}/>
        <div ref={ this.mainHeader } className="main-header">
          <MainHeader  title={ 'Time tracker '}/>
        </div>
        <div ref={ this.mainContainer } className="main-container">
          <TimeTracker/>
        </div>
      </div>
    );
  }
}

export default App;
