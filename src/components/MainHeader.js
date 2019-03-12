import React, { Component } from 'react';
import '../styles/MainHeader.css';

class SideMenu extends Component {

  render() {
    const { title } = this.props;
    return (
      <div className="main-header">
        <h1>{ title }</h1>
      </div>
    );
  }
}

export default SideMenu;
