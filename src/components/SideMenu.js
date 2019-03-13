import React, { Component } from 'react';
import '../styles/SideMenu.css';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClassName: 'hamburger',
      menuClassName: 'side-menu'
    }

    this.showHideMenu = this.showHideMenu.bind(this);
  }

  showHideMenu() {
    let {
      menuClassName,
      hamburgerClassName
    } = this.state;
    console.log(this.props);
    const mainContainer = this.props.main.current,
      mainHeader = this.props.header.current;
      
    console.log(mainContainer);
    switch (hamburgerClassName) {
      case 'hamburger':
        hamburgerClassName = 'hamburger change';
        menuClassName = 'side-menu opened';
        break;
      case 'hamburger change':
        hamburgerClassName = 'hamburger';
        menuClassName = 'side-menu';
        break;
      default:
        hamburgerClassName = 'hamburger change';
        menuClassName = 'side-menu opened';
    }

    mainContainer.classList.toggle('change');
    mainHeader.classList.toggle('change');

    this.setState({
      menuClassName,
      hamburgerClassName
    });
  }

  render() {
    const {
      menuClassName,
      hamburgerClassName
    } = this.state;

    return (
      <div className={ menuClassName }>
        <div className={ hamburgerClassName } onClick={ this.showHideMenu }>
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
