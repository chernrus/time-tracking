import React, { Component } from 'react';

class TotalTime extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="total-time">
          Всего&nbsp;
          <span className="total-time__time">00:00</span>
      </div>
    );
  }
}

export default TotalTime;
