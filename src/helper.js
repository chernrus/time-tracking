
export const helper = (function(){

  function checkData(data) {
    if(data.length === 0) return 0;

    return true;
  };

  function getData(key) {

    var data = null;

    return new Promise((resolve, reject) => {
      try {
          data = JSON.parse(window.localStorage.getItem(key));
          if(data) {
            resolve(data);
          }
          else {
            reject();
          }
      } catch (e) {
          reject();
      }
    })
  };

  function sumTime(first, second) {
    console.log(first, second);
    var firstArr = first.split(':'),
      secondArr = second.split(':'),
      hours = parseInt(firstArr[0]) + parseInt(secondArr[0]),
      minutes = parseInt(firstArr[1]) + parseInt(secondArr[1]);

    hours = (minutes >= 60) ? hours + 1 : hours;
    minutes = (minutes >= 60) ? minutes - 60 : minutes;

    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;
  }

  return {
    getData,
    checkData,
    sumTime
  }

}());
