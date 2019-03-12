import React, { Component } from 'react';
import Time from './Time';

class CalculatedList extends Component {

  sortData(data, field) {
    var sorted = data.sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      })

    return sorted;
  }

  calcPeriod(start, end) {
    if( !Time.isTime(start) && !Time.isTime(end) ) return '00:00';

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

  sumTime(first, second) {
    console.log(first, second);
    var firstArr = first.split(':'),
      secondArr = second.split(':'),
      hours = parseInt(firstArr[0]) + parseInt(secondArr[0]),
      minutes = parseInt(firstArr[1]) + parseInt(secondArr[1]);

    hours = (minutes >= 60) ? hours + 1 : hours;
    minutes = (minutes >= 60) ? minutes - 60 : minutes;

    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;
  }

  calculateTimeSummary(firstT, secondT) {
    console.log(firstT, secondT);
    var period = secondT.period || this.calcPeriod(secondT.start, secondT.end),
      time = firstT ? this.sumTime(firstT.time, period) : period;

    return {time: time, name: secondT.name};
  }

  calculate(data) {
    var sorted = this.sortData(data, 'name'),
      calculated = [],
      sumBuffer = null,
      sum = '00:00';
    console.log(data);
    for(var i = 0; i < sorted.length; i++) {
      if(calculated.find((task)=>{return task.name === sorted[i].name})) {
        continue;
      }
      else {
        var name = sorted[i].name;
        for(var j = 0; j < sorted.length; j++) {
          if(sorted[j].name === name) {
            sumBuffer = this.calculateTimeSummary(sumBuffer, sorted[j]);
          }
        }
        calculated.push(sumBuffer);
        sumBuffer = null;
      }
    }
    console.log(calculated);

    return calculated;
  };

  createList(calculatedTasks) {
    const calcList = [];

      calculatedTasks.map((item) => {
        calcList.push(

          <div className="calculated-list__item" key={item.name}>
            <span className="calculated-list__task-time">{Time.parseTimeFormat(item.time, 'dhdm')}</span> -&nbsp;
            <span className="calculated-list__task-name">{item.name || '~'}</span>
          </div>
        )
      });

      return calcList;
  }

  render() {

    const { data } = this.props,
      calculatedTasks = this.calculate(data),
      list = this.createList(calculatedTasks);

    console.log(data);

    return (
      <div className="calculated-list">
        { list }
      </div>
    );
  }
}

export default CalculatedList;
