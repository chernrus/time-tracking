import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: props.task.start,
      end: props.task.end,
      name: props.task.name,
      id: props.task.id,
      period: props.task.period
    };
  }

  render() {

    return (
      <div className="task">
        <input type="time" class="calculator__time-input startTime">
        <button type="button" class="calculator__time-item-button startBtn">+</button>
        <input type="time" class="calculator__time-input endTime">
        <button type="button" class="calculator__time-item-button endBtn">+</button>
        <input type="text" class="calculator__task-input taskInput">
        <button type="button" class="calculator__time-delete-button deleteBtn">X</button>
      </div>
    );
  }
}

export default Task;
