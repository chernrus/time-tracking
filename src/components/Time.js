var Time = (function () {

  function isTime(time) {
    const reg = /[0-9]{2}:[0-9]{2}/g;
    return reg.test(time);
  }

  function getTime(foramt) {
    var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      tStrHM = `${(hours > 9 ? hours : `0${hours}`)}:${(minutes > 9 ? minutes : `0${minutes}`)}`;

      switch (foramt) {
        case 'hh:mm':
          return tStrHM;
          break;
        case 'hh:mm:ss':
          return `${tStrHM}:${(seconds > 9 ? seconds : `0${seconds}`)}`;
          break;
        default:
          return tStrHM;
      }
  }

  function parseTimeFormat(time, format) {
    if(isTime(time)) {
      var timeArr = time.split(':');

      return `${+timeArr[0]}h ${+timeArr[1]}m`;
    }

    return '0h 0m';
  }

  return {
    isTime,
    getTime,
    parseTimeFormat
  }

}());

export default Time;
