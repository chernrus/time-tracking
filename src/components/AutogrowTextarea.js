import React, { Component } from 'react';
import '../styles/AutogrowTextarea.css';

class AutogrowTextarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      rows: 1,
      minRows: 1,
      maxRows: 5,
      maxLength: 60
    }

    this.refNameElement = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    setTimeout(this.handleChange, 50, { target: this.refNameElement.current });
  }

  handleChange(event) {
    const textareaLineHeight = 18,
      { minRows, maxRows, value } = this.state,
      previousRows = event.target.rows,
      currentValue = event.target.value;

  	event.target.rows = minRows; // reset number of rows in textarea

		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }

		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}

  	this.setState({
    	value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
    // console.log('sdfsdfg');
    if(currentValue !== value) {
      this.props.onChangeValue(event.target.value);
    }
  }

  render() {
    return (
      <textarea
        ref={this.refNameElement}
        name="name"
        className="task__name"
				rows={this.state.rows}
				value={this.state.value}
				onChange={this.handleChange}
        maxLength={this.state.maxLength}
			/>
    );
  }
}

export default AutogrowTextarea;
