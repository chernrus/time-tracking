import uuidv4 from './uuid';
import Mediator from './Mediator';
import Timer from './Timer';

class TimeTask {
  constructor({start, end, name, id}) {
    var template = `<input type="time" class="calculator__time-input startTime">
      <button type="button" class="calculator__time-item-button startBtn">+</button>
      <input type="time" class="calculator__time-input endTime" placeholder="hh:mm" pattern="${`(1[0-2]|0[1-9])\/(1[5-9]|2\d)`}">
      <button type="button" class="calculator__time-item-button endBtn">+</button>
      <input type="text" class="calculator__task-input taskInput">
      <button type="button" class="calculator__time-delete-button deleteBtn">X</button>`;

    console.log(start, end, name, id);
    this.container = document.createElement('div');
    this.id = id || uuidv4();
    this.start = start || Timer.getTime('hh:mm');
    this.end = end || '';
    this.taskName = name || '';

    this.container.classList.add('calculator__calculated-list-item');
    this.container.innerHTML = template;

    this.startInput = this.container.querySelector('.startTime');
    this.startBtn = this.container.querySelector('.startBtn');
    this.endInput = this.container.querySelector('.endTime');
    this.endBtn = this.container.querySelector('.endBtn');
    this.taskInput = this.container.querySelector('.taskInput');
    this.deleteBtn = this.container.querySelector('.deleteBtn');

    this.startInput.value = this.start;
    this.endInput.value = this.end;
    this.taskInput.value = this.taskName;

    this.startInput.onchange = this.changeStart.bind(this);
    this.endInput.onchange = this.changeEnd.bind(this);
    this.taskInput.onchange = this.changeTaskName.bind(this);

    this.startBtn.onclick = this.refreshStart.bind(this);
    this.endBtn.onclick = this.refreshEnd.bind(this);
    this.deleteBtn.onclick = this.deleteTask.bind(this);
  }

  changeTask() {
    Mediator.publish('save task', {
      start: this.start,
      end: this.end,
      name: this.taskName,
      id: this.id
    });
  }

  changeStart() {
    this.start = this.startInput.value;
    console.log('change start x');
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
    console.log('start');
    var time = Timer.getTime('hh:mm');
    this.startInput.value = time;
    this.changeStart();
  }

  refreshEnd() {
    console.log('end');
    var time = Timer.getTime('hh:mm');
    this.endInput.value = time;
    this.changeEnd();
  }

  deleteTask() {
    console.log('dele');
    Mediator.publish('delete task', {
      id: this.id
    });

    this.destroy();
  }

  destroy() {
    this.startInput.onchange = null;
    this.endInput.onchange = null;
    this.taskInput.onchange = null;

    this.startBtn.onclick = null;
    this.endBtn.onclick = null;
    this.deleteBtn.onclick = null;

    this.container.parentNode.removeChild(this.container);
  }

}

export default TimeTask;
