import React, { Component } from 'react';

class CreateTaskButton extends Component {
  constructor() {
    super();

    this.createTask = this.createTask.bind(this);
  }

  createTask() {
    const { onCreate } = this.props;

    onCreate();
  }

  render() {

    return (
        <button className="create-task-button" type="button" name="add-btn"
          onClick={this.createTask}>+ Add</button>
    );
  }
}

export default CreateTaskButton;
