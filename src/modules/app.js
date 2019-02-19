import mediator from './Mediator';
import TimeTask from './TimeTask';
import Mediator from './Mediator';

var TimeTracker = (function() {
  var _data = [],
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

  function renderTimeList() {
    console.log(_data);
  };

  function loadData() {
    getData('data1')
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

  function addTask() {
    var task = new TimeTask();
    _tasksContainer.appendChild(task.container);
  };

  function addTaskInStorage() {

  }

  function changeTaskInStorage(task) {
    console.log(task);
  }

  function calculateTime() {
    console.log('calc');
  };

  function cleanTaskList() {
    console.log('clean');
  };

  function init (modules) {
    console.log('init');

    _addBtn = document.querySelector('.add-btn');
    _calcBtn = document.querySelector('.calc-btn');
    _cleanBtn = document.querySelector('.clean-btn');
    _totalLine = document.querySelector('.calculator__total-num');
    _tasksContainer = document.querySelector('.calculator__time-list');

    _addBtn.onclick = addTask;
    _calcBtn.onclick = calculateTime;
    _cleanBtn.onclick = cleanTaskList;

    loadData();

    Mediator.subscribe('change task', changeTaskInStorage);
    changeTaskInStorage

  };

  return {
    init: init
  }
}());

export default TimeTracker;
