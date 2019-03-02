import React, { Component } from 'react';
import ControlButtons from './ControlButtons';
import TaskList from './TaskList';
import CreateTaskButton from './CreateTaskButton';
import TotalTime from './TotalTime';
import { helper as _ } from '../helper';
import uuidv4 from '../uuid';

class TimeTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      data: []
    };

    this.loadData();

    this.calculateTasks = this.calculateTasks.bind(this);
    this.removeAllTask = this.removeAllTask.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  loadData() {
    _.getData('timeTasks')
      .then(
        response => response,
        error => []
      )
      .then(
        (data) => {
          this.setState({ data: data });
        }
      );
  }

  calculateTasks() {
    console.log('Calculate all tasks');
  }

  removeAllTask() {
    console.log('Remove all tasks');
  }

  createTask() {
    console.log('Create tasks');
  }

  render() {
    const { data } = this.state
    return (
      <div className="time-tracker">
        <div className="time-tracker__header">
          <ControlButtons
            onCalculate={this.calculateTasks}
            onRemove={this.removeAllTask}/>
        </div>
        <TaskList/>
        <div className="time-tracker__footer">
          <CreateTaskButton
            onCreate={this.createTask}/>
          <TotalTime/>
        </div>
      </div>
    );
  }
}

export default TimeTracker;
