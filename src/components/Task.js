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

  changeTask(task) {
    console.log('change');

    const { onChange } = this.props;
    console.log(task);
    onChange(task);
  }

  removeTask() {
    console.log('remove');

    const { onRemove } = this.props,
      { id } = this.state;

    onRemove(id);
  }

  isTime(time) {
    const reg = /[0-9]{2}:[0-9]{2}/g;
    return reg.test(time);
  }

  calculatePeriod(start, end) {
    if( !this.isTime(start) && !this.isTime(end) ) return '00:00';

    const startArr = start.split(':'),
      endArr = end.split(':');

    let hours = parseInt(endArr[0]) - parseInt(startArr[0]),
      minutes = parseInt(endArr[1]) - parseInt(startArr[1]);

    hours = (hours < 0) ? hours + 24 : hours;
    hours = (minutes < 0) ? hours - 1 : hours;
    minutes = (minutes < 0) ? minutes + 60 : minutes;

    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;
  }

  changeStartTime(start) {
    const { id, end, name } = this.state,
      period = this.calculatePeriod(start, end);

    this.setState({ start, period });
    this.changeTask({ id, start, end, name, period });
  }

  changeEndTime(end) {
    const { id, start, name } = this.state,
      period = this.calculatePeriod(start, end);

    this.setState({ end, period });
    this.changeTask({ id, start, end, name, period });
  }

  changeName(value) {
    const { id, start, end, period } = this.state;
    this.setState({ name: value });
    this.changeTask({ id, start, end, name: value, period });
  }

  inputHandler(e) {

    const field = e.target.name,
      { value } = e.target,
      period = '00:00';

    switch (field) {
      case 'start':
        this.changeStartTime(value);
        break;
      case 'end':
        this.changeEndTime(value);
        break;
      case 'name':
        this.changeName(value);
        break;
      default:
        return;
    }
  }

  updateStart() {

    const time = Time.getTime('hh:mm');

    this.changeStartTime(time);
  }

  updateEnd() {
    const time = Time.getTime('hh:mm');

    this.changeEndTime(time);
  }

  render() {
    const { start,
      end,
      name,
      period
    } = this.state;

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
        <span className="task__period">{period}</span>
      </div>
    );
  }
}

export default Task;
