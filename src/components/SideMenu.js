import React, { Component } from 'react';
import '../styles/SideMenu.css';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClassName: 'hamburger'
    }

    this.showHideMenu = this.showHideMenu.bind(this);
  }

  showHideMenu() {
    let { hamburgerClassName } = this.state;

    switch (hamburgerClassName) {
      case 'hamburger':
        hamburgerClassName = 'hamburger change';
        break;
      case 'hamburger change':
        hamburgerClassName = 'hamburger';
        break;
      default:
        hamburgerClassName = 'hamburger change';
    }

    this.setState({ hamburgerClassName });
  }

  render() {

    return (
      <div className="side-menu">
        <div className={ this.state.hamburgerClassName } onClick={ this.showHideMenu }>
          <div className="hamburger__bar1"></div>
          <div className="hamburger__bar2"></div>
          <div className="hamburger__bar3"></div>
        </div>
        <a href="#">Time-tracker</a>
        <a href="#">Pomodoro</a>
        <a href="#">Desk</a>
      </div>
    );
  }
}

export default SideMenu;
