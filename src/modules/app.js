import mediator from './Mediator';

import Fabric from './Fabric';
import Mediator from './Mediator';

var TimeTracker = (function() {
  var fabric = new Fabric(),
    _data = [],
    _addBtn = null,
    _cleanBtn = null,
    _calcBtn = null,
    _totalLine = null,
    _tasksContainer = null;

  function checkData(data) {
    if(data.length === 0) return 0;

    return true;
  };

  function getData(key) {

    var timeData = null;

    return new Promise((resolve, reject) => {
      try {
          timeData = JSON.parse(window.localStorage.getItem(key));
          if(timeData) {
            resolve(timeData);
          }
          else {
            reject();
          }
      } catch (e) {
          reject();
      }
    })
  };

  function saveData() {
    window.localStorage.setItem('timeTasks', JSON.stringify(_data));
  }

  function renderTimeList() {
    _data.map((item) => {
      var task = fabric.create('task', item);
      _tasksContainer.appendChild(task.container);
    })
  };

  function loadData() {
    getData('timeTasks')
      .then(
        response => response,
        error => []
      )
      .then(
        (data) => {
          _data = data;
          renderTimeList()
        }
      );
  };

  function createTask() {
    var task = fabric.create('task');
    _tasksContainer.appendChild(task.container);
  };

  function saveTask(task) {
    var isValue = false;
    _data.map((item)=>{
      if(item.id === task.id) {
        item.start = task.start;
        item.end = task.end;
        item.name = task.name;
        isValue = true;
      }
    });

    if(!isValue) { _data.push(task) };

    saveData();
  }

  function deleteTaskInStorage({ id }) {
    _data.forEach((item, i) => {
      if(item.id === id) {
        _data.splice(i, 1);
      }
    });

    saveData();
  }

  function calculateTime() {
    console.log('calc');
  };

  function cleanTaskList() {
    console.log('clean');
    window.localStorage.removeItem('timeTasks');

    _tasksContainer.innerHTML = '';
  };

  function init (modules) {
    console.log('init');

    _addBtn = document.querySelector('.add-btn');
    _calcBtn = document.querySelector('.calc-btn');
    _cleanBtn = document.querySelector('.clean-btn');
    _totalLine = document.querySelector('.calculator__total-num');
    _tasksContainer = document.querySelector('.calculator__time-list');

    _addBtn.onclick = createTask;
    _calcBtn.onclick = calculateTime;
    _cleanBtn.onclick = cleanTaskList;

    loadData();

    Mediator.subscribe('save task', saveTask);
    Mediator.subscribe('delete task', deleteTaskInStorage);
  };

  return {
    init: init
  }
}());

export default TimeTracker;
