import React, { Component } from 'react';

class ControlButtons extends Component {
  constructor(props) {
    super(props);

    this.onCalculate = this.onCalculate.bind(this);
    this.onRemoveAll = this.onRemoveAll.bind(this);
  }

  onCalculate() {
    this.props.onCalculate();
  }

  onRemoveAll() {
    this.props.onRemove();
  }

  render() {

    return (
      <div className="control-buttons">
        <button
          className="control-buttons__calculate" type="button" name="calc-btn"
          onClick={this.onCalculate}>
            Calculate
        </button>
        <button className="control-buttons__clean" type="button" name="clean-btn"
          onClick={this.onRemoveAll}>
            Clear
        </button>
      </div>
    );
  }
}

export default ControlButtons;
