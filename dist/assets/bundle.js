/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Mediator */ \"./src/modules/Mediator.js\");\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n\r\n\r\n\r\n\r\n\r\nfunction kek(data) {\r\n  console.log(data);\r\n}\r\n\r\n_modules_Mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('ha', kek);\r\n\r\nwindow.onload = () => {\r\n  _modules_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/Fabric.js":
/*!*******************************!*\
  !*** ./src/modules/Fabric.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TimeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeTask */ \"./src/modules/TimeTask.js\");\n\r\n\r\nclass Fabric {\r\n  create(type, options = {}) {\r\n    console.log(type);\r\n    switch (type) {\r\n      case 'task':\r\n        return new _TimeTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options);\r\n        break;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fabric);\r\n\n\n//# sourceURL=webpack:///./src/modules/Fabric.js?");

/***/ }),

/***/ "./src/modules/Mediator.js":
/*!*********************************!*\
  !*** ./src/modules/Mediator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// pattern mediarot 'pub-sub'\r\n\r\nvar mediator = (function () {\r\n  var subscribe = function(channel, fn) {\r\n      if(!mediator.channels[channel]) {\r\n        mediator.channels[channel] = [];\r\n      }\r\n      mediator.channels[channel].push({context: this, callback: fn});\r\n      return this;\r\n    },\r\n\r\n    publish = function(channel) {\r\n      if(!mediator.channels[channel]) return false;\r\n\r\n      var args = Array.prototype.slice.call(arguments, 1),\r\n        subscription = null;\r\n\r\n      for (var i = 0, l = mediator.channels[channel].length; i < l; i++) {\r\n        subscription = mediator.channels[channel][i];\r\n        subscription.callback.apply(subscription.context, args);\r\n      }\r\n\r\n      return this;\r\n    };\r\n\r\n    return {\r\n      channels: {},\r\n      publish: publish,\r\n      subscribe: subscribe,\r\n      installTo: function(obj) {\r\n        obj.subscribe = subscribe;\r\n        obj.publish = publish;\r\n      }\r\n    };\r\n\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mediator);\r\n\n\n//# sourceURL=webpack:///./src/modules/Mediator.js?");

/***/ }),

/***/ "./src/modules/TimeTask.js":
/*!*********************************!*\
  !*** ./src/modules/TimeTask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uuid */ \"./src/modules/uuid.js\");\n/* harmony import */ var _Mediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mediator */ \"./src/modules/Mediator.js\");\n/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timer */ \"./src/modules/Timer.js\");\n\r\n\r\n\r\n\r\nclass TimeTask {\r\n  constructor({start, end, name, id}) {\r\n    var template = `<input type=\"text\" class=\"calculator__time-input startTime\">\r\n      <button type=\"button\" class=\"calculator__time-item-button startBtn\">+</button>\r\n      <input type=\"text\" class=\"calculator__time-input endTime\">\r\n      <button type=\"button\" class=\"calculator__time-item-button endBtn\">+</button>\r\n      <input type=\"text\" class=\"calculator__task-input taskInput\">\r\n      <button type=\"button\" class=\"calculator__time-delete-button deleteBtn\">X</button>`;\r\n\r\n      console.log(start, end, name, id);\r\n    this.container = document.createElement('div');\r\n    this.id = id || Object(_uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    this.start = start || _Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTime('hh:mm');\r\n    this.end = end || '';\r\n    this.taskName = name || '';\r\n\r\n    this.container.classList.add('calculator__calculated-list-item');\r\n    this.container.innerHTML = template;\r\n\r\n    this.startInput = this.container.querySelector('.startTime');\r\n    this.startBtn = this.container.querySelector('.startBtn');\r\n    this.endInput = this.container.querySelector('.endTime');\r\n    this.endBtn = this.container.querySelector('.endBtn');\r\n    this.taskInput = this.container.querySelector('.taskInput');\r\n    this.deleteBtn = this.container.querySelector('.deleteBtn');\r\n\r\n    this.startInput.value = this.start;\r\n    this.endInput.value = this.end;\r\n    this.taskInput.value = this.taskName;\r\n\r\n    this.startInput.onchange = this.changeStart.bind(this);\r\n    this.endInput.onchange = this.changeEnd.bind(this);\r\n    this.taskInput.onchange = this.changeTaskName.bind(this);\r\n\r\n    this.startBtn.onclick = this.refreshStart.bind(this);\r\n    this.endBtn.onclick = this.refreshEnd.bind(this);\r\n    this.deleteBtn.onclick = this.deleteTask.bind(this);\r\n  }\r\n\r\n  changeTask() {\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('save task', {\r\n      start: this.start,\r\n      end: this.end,\r\n      name: this.taskName,\r\n      id: this.id\r\n    });\r\n  }\r\n\r\n  changeStart() {\r\n    this.start = this.startInput.value;\r\n    console.log('change start x');\r\n    this.changeTask();\r\n  }\r\n\r\n  changeEnd() {\r\n    this.end = this.endInput.value;\r\n    this.changeTask();\r\n  }\r\n\r\n  changeTaskName() {\r\n    this.taskName = this.taskInput.value;\r\n    this.changeTask();\r\n  }\r\n\r\n  refreshStart() {\r\n    console.log('start');\r\n    var time = _Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTime('hh:mm');\r\n    this.startInput.value = time;\r\n    this.changeStart();\r\n  }\r\n\r\n  refreshEnd() {\r\n    console.log('end');\r\n    var time = _Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTime('hh:mm');\r\n    this.endInput.value = time;\r\n    this.changeEnd();\r\n  }\r\n\r\n  deleteTask() {\r\n    console.log('dele');\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publish('delete task', {\r\n      id: this.id\r\n    });\r\n\r\n    this.destroy();\r\n  }\r\n\r\n  destroy() {\r\n    this.startInput.onchange = null;\r\n    this.endInput.onchange = null;\r\n    this.taskInput.onchange = null;\r\n\r\n    this.startBtn.onclick = null;\r\n    this.endBtn.onclick = null;\r\n    this.deleteBtn.onclick = null;\r\n\r\n    this.container.parentNode.removeChild(this.container);\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeTask);\r\n\n\n//# sourceURL=webpack:///./src/modules/TimeTask.js?");

/***/ }),

/***/ "./src/modules/Timer.js":
/*!******************************!*\
  !*** ./src/modules/Timer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Timer = (function () {\r\n\r\n  function getTime(foramt) {\r\n    var currentTime = new Date(),\r\n      hours = currentTime.getHours(),\r\n      minutes = currentTime.getMinutes(),\r\n      seconds = currentTime.getSeconds(),\r\n      tStrHM = `${(hours > 9 ? hours : `0${hours}`)}:${(minutes > 9 ? minutes : `0${minutes}`)}`;\r\n\r\n      switch (foramt) {\r\n        case 'hh:mm':\r\n          return tStrHM;\r\n          break;\r\n        case 'hh:mm:ss':\r\n          return `${tStrHM}:${(seconds > 9 ? seconds : `0${seconds}`)}`;\r\n          break;\r\n        default:\r\n          return tStrHM;\r\n      }\r\n  }\r\n\r\n  return {\r\n    getTime\r\n  }\r\n\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\r\n\n\n//# sourceURL=webpack:///./src/modules/Timer.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mediator */ \"./src/modules/Mediator.js\");\n/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fabric */ \"./src/modules/Fabric.js\");\n\r\n\r\n\r\n\r\n\r\nvar TimeTracker = (function() {\r\n  var fabric = new _Fabric__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\r\n    _data = [],\r\n    _addBtn = null,\r\n    _cleanBtn = null,\r\n    _calcBtn = null,\r\n    _totalLine = null,\r\n    _tasksContainer = null;\r\n\r\n  function checkData(data) {\r\n    if(data.length === 0) return 0;\r\n\r\n    return true;\r\n  };\r\n\r\n  function getData(key) {\r\n\r\n    var timeData = null;\r\n\r\n    return new Promise((resolve, reject) => {\r\n      try {\r\n          timeData = JSON.parse(window.localStorage.getItem(key));\r\n          if(timeData) {\r\n            resolve(timeData);\r\n          }\r\n          else {\r\n            reject();\r\n          }\r\n      } catch (e) {\r\n          reject();\r\n      }\r\n    })\r\n  };\r\n\r\n  function saveData() {\r\n    window.localStorage.setItem('timeTasks', JSON.stringify(_data));\r\n  }\r\n\r\n  function renderTimeList() {\r\n    _data.map((item) => {\r\n      var task = fabric.create('task', item);\r\n      _tasksContainer.appendChild(task.container);\r\n    })\r\n  };\r\n\r\n  function loadData() {\r\n    getData('timeTasks')\r\n      .then(\r\n        response => response,\r\n        error => []\r\n      )\r\n      .then(\r\n        (data) => {\r\n          _data = data;\r\n          renderTimeList()\r\n        }\r\n      );\r\n  };\r\n\r\n  function createTask() {\r\n    var task = fabric.create('task');\r\n    _tasksContainer.appendChild(task.container);\r\n  };\r\n\r\n  function saveTask(task) {\r\n    var isValue = false;\r\n    _data.map((item)=>{\r\n      if(item.id === task.id) {\r\n        item.start = task.start;\r\n        item.end = task.end;\r\n        item.name = task.name;\r\n        isValue = true;\r\n      }\r\n    });\r\n\r\n    if(!isValue) { _data.push(task) };\r\n\r\n    saveData();\r\n  }\r\n\r\n  function deleteTaskInStorage({ id }) {\r\n    _data.forEach((item, i) => {\r\n      if(item.id === id) {\r\n        _data.splice(i, 1);\r\n      }\r\n    });\r\n\r\n    saveData();\r\n  }\r\n\r\n  function calculateTime() {\r\n    console.log('calc');\r\n  };\r\n\r\n  function cleanTaskList() {\r\n    console.log('clean');\r\n    window.localStorage.removeItem('timeTasks');\r\n\r\n    _tasksContainer.innerHTML = '';\r\n  };\r\n\r\n  function init (modules) {\r\n    console.log('init');\r\n\r\n    _addBtn = document.querySelector('.add-btn');\r\n    _calcBtn = document.querySelector('.calc-btn');\r\n    _cleanBtn = document.querySelector('.clean-btn');\r\n    _totalLine = document.querySelector('.calculator__total-num');\r\n    _tasksContainer = document.querySelector('.calculator__time-list');\r\n\r\n    _addBtn.onclick = createTask;\r\n    _calcBtn.onclick = calculateTime;\r\n    _cleanBtn.onclick = cleanTaskList;\r\n\r\n    loadData();\r\n\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('save task', saveTask);\r\n    _Mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('delete task', deleteTaskInStorage);\r\n  };\r\n\r\n  return {\r\n    init: init\r\n  }\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeTracker);\r\n\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/uuid.js":
/*!*****************************!*\
  !*** ./src/modules/uuid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return uuidv4; });\nfunction uuidv4() {\r\n  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {\r\n    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\r\n    return v.toString(16);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/uuid.js?");

/***/ })

/******/ });