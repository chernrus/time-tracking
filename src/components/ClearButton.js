import React, { Component } from 'react';

class ClearButton extends Component {
  constructor(props) {
    super(props);

    this.onRemoveAll = this.onRemoveAll.bind(this);
  }

  onRemoveAll() {
    this.props.onRemove();
  }

  render() {

    return (
      <button className="button-clear" type="button" name="clear-btn"
        onClick={this.onRemoveAll}>
          Clear
      </button>
    );
  }
}

export default ClearButton;
