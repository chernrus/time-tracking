var Time = (function () {

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

  return {
    getTime
  }

}());

export default Time;
