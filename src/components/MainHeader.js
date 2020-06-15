import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MainHeader.css';

class MainHeader extends Component {

  render() {
    const { title } = this.props;
    return (
      <div className="main-header__title">
        <h1>{ title }</h1>
      </div>
    );
  }
}

export default MainHeader;

MainHeader.propTypes = {
  title: PropTypes.string
};
