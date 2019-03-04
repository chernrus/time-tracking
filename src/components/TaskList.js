import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  constructor() {
    super();
  }

  createTasks(data) {
    let tasks = [];

    console.log(data);
    data.forEach((taskData, i) => {
      tasks.push(
        <Task
          key={i}
          taskData = { taskData }
          onChange = { this.props.onChange }
          onRemove = { this.props.onRemove }/>
      )
    });
    return tasks;
  }

  render() {

    const { data } = this.props,
      tasks = this.createTasks(data);

    return (
      <div className="task-list">
        { tasks }
      </div>
    );
  }
}

export default TaskList;
