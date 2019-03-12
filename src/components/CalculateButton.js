import React, { Component } from 'react';

class CalculateButton extends Component {
  constructor(props) {
    super(props);

    this.onCalculate = this.onCalculate.bind(this);
  }

  onCalculate() {
    this.props.onCalculate();
  }

  render() {

    return (
      <button
        className="button-calculate" type="button" name="calc-btn"
        onClick={this.onCalculate}>
          Calculate
      </button>
    );
  }
}

export default CalculateButton;
