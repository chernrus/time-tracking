import uuidv4 from './uuid';
import Mediator from './Mediator';

class TimeTask {
  constructor() {
    var template = `<input type="text" class="calculator__time-input startTime">
      <button type="button" class="calculator__time-item-button startBtn">+</button>
      <input type="text" class="calculator__time-input endTime">
      <button type="button" class="calculator__time-item-button endBtn">+</button>
      <input type="text" class="calculator__task-input taskInput">
      <button type="button" class="calculator__time-delete-button deleteBtn">X</button>`;

    this.id = uuidv4();
    this.container = document.createElement('div');
    this.start = '';
    this.end = '';
    this.taskName = '';

    this.container.classList.add('calculator__calculated-list-item');
    this.container.innerHTML = template;

    this.startInput = this.container.querySelector('.startTime');
    this.startBtn = this.container.querySelector('.startBtn');
    this.endInput = this.container.querySelector('.endTime');
    this.endBtn = this.container.querySelector('.endBtn');
    this.taskInput = this.container.querySelector('.taskInput');
    this.deleteBtn = this.container.querySelector('.deleteBtn');

    this.startInput.onchange = this.changeStart.bind(this);
    this.endInput.onchange = this.changeEnd.bind(this);
    this.taskInput.onchange = this.changeTaskName.bind(this);

    this.startBtn.onclick = this.refreshStart.bind(this);
    this.endBtn.onclick = this.refreshEnd.bind(this);
    this.deleteBtn.onclick = this.deleteTask.bind(this);
    // this.startBtn = document.createElement('button');
    // this.endBtn = document.createElement('button');
    // this.deleteBtn = document.createElement('button');
    // this.startInput = document.createElement('input');
    // this.endInput = document.createElement('input');
    // this.taskInput = document.createElement('input');




    console.log(this.startInput);
  }

  changeTask() {
    Mediator.publish('change task', {
      start: this.start,
      end: this.end,
      name: this.taskName,
      id: this.id
    });
  }

  changeStart() {
    this.start = this.startInput.value;
    this.changeTask();
  }

  changeEnd() {
    this.end = this.endInput.value;
    this.changeTask();
  }

  changeTaskName() {
    this.taskName = this.taskInput.value;
    this.changeTask();
  }

  refreshStart() {

  }

  refreshEnd() {

  }

  deleteTask() {

  }

}

export default TimeTask;
