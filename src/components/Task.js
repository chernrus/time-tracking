import React, { Component } from 'react';
import uuidv4 from '../uuid';
import Time from './Time';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: props.taskData.start || Time.getTime('hh:mm'),
      end: props.taskData.end || '',
      name: props.taskData.name || '',
      id: props.taskData.id || uuidv4(),
      period: props.taskData.period || '00:00'
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.updateStart = this.updateStart.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  changeTask() {
    console.log('change');

    const { onChange } = this.props,
      {
        name,
        start,
        end,
        id,
        period
      } = this.state;

    onChange({ name, start, end, id, period });
  }

  componentDidUpdate() {
    this.changeTask();
  }

  removeTask() {
    console.log('remove');

    const { onRemove } = this.props,
      { id } = this.state;

    onRemove(id);
  }

  inputHandler(e) {

    const field = e.target.name,
      { value } = e.target;

    this.setState({ [field] : value })
  }

  updateStart() {
    const time = Time.getTime('hh:mm');

    this.setState({ start: time });
  }

  updateEnd() {
    const time = Time.getTime('hh:mm');

    this.setState({ end: time });
  }

  render() {
    const { start,
      end,
      name } = this.state;

    return (
      <div className="task">
        <input type="time" className="task__time-input startTime"
          name="start"
          value={ start }
          onChange={ this.inputHandler }/>
        <button type="button" className="task__time-button startBtn"
          onClick={ this.updateStart }>+</button>
        <input type="time" className="task__time-input endTime"
          name="end"
          value={ end }
          onChange={ this.inputHandler }/>
        <button type="button" className="task__time-button endBtn"
          onClick={ this.updateEnd }>+</button>
        <input type="text" className="task__name-input taskInput"
          name="name"
          value={ name }
          onChange={this.inputHandler}/>
        <button type="button" className="task__delete-button deleteBtn"
          onClick={this.removeTask}>X</button>
      </div>
    );
  }
}

export default Task;
