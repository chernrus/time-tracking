"use strict";

var CalcTime = (function() {

  function sortData(data, field) {
    var sorted = data.sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      })

    return sorted;
  }

  function calcPeriod(start, end) {
    var startArr = start.split(':'),
      endArr = end.split(':'),
      hours = parseInt(endArr[0]) - parseInt(startArr[0]),
      minutes = parseInt(endArr[1]) - parseInt(startArr[1]);

    hours = (hours < 0) ? hours + 24 : hours;
    hours = (minutes < 0) ? hours - 1 : hours;
    minutes = (minutes < 0) ? minutes + 60 : minutes;
    console.log(start, end);
    console.log(start, end, `=${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`);
    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;
  }

  function sumTime(first, second) {
    // console.log('sum', first, second);

    var firstArr = first.split(':'),
      secondArr = second.split(':'),
      hours = parseInt(firstArr[0]) + parseInt(secondArr[0]),
      minutes = parseInt(firstArr[1]) + parseInt(secondArr[1]);

    console.log(hours, minutes);
    hours = (minutes >= 60) ? hours + 1 : hours;
    minutes = (minutes >= 60) ? minutes - 60 : minutes;
    console.log(`${hours}:${minutes}`);
    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;
  }

  function calculateTimeSummary(firstT, secondT) {
    console.log(firstT, secondT);
    var period = calcPeriod(secondT.start, secondT.end),
      time = firstT ? sumTime(firstT.time, period) : period;
    console.log('p', period, time);
    return {time: time, name: secondT.name};
  }

  function calculate(data) {
    var calculated = [],
      sumBuffer = null,
      sorted = sortData(data, 'name'),
      sum = '00:00';

    // console.log(data);
    // console.log(sorted);
    for(var i = 0; i < sorted.length; i++) {
      if(calculated.find((task)=>{return task.name === sorted[i].name})) {
        continue;
      }
      else {
        var name = sorted[i].name;
        for(var j = 0; j < sorted.length; j++) {
          if(sorted[j].name === name) {
            sumBuffer = calculateTimeSummary(sumBuffer, sorted[j]);
          }
        }
        calculated.push(sumBuffer);
        sumBuffer = null;
      }
      // if(sorted[i].name === sorted[i+1].name) {
      //   console.log(sorted[i].name);
      //   buffer.push(sorted[i+1]);
      // }
      // else {
      //   buffer.forEach((task)=>{
      //     sum = sumTime(sum, calcPeriod(task.start, task.end));
      //   })
      //   console.log(buffer);
      //   calculated.push({
      //     name: buffer[0].name,
      //     time: sum
      //   })
      //   buffer = [sorted[i+1]];
      //   sum = '00:00';
      //   console.log(buffer);
      // }
    }
    console.log(calculated);
  };

  return {
    calculate
  }
}());

export default CalcTime;
