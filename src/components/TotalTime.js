import React, { Component } from 'react';
import '../styles/TotalTime.css';

class TotalTime extends Component {
  render() {
    const { time } = this.props
    return (
      <div className="total-time">
          Всего&nbsp;
          <span className="total-time__time">{ time }</span>
      </div>
    );
  }
}

export default TotalTime;
