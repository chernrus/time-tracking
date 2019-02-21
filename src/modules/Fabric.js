import TimeTask from './TimeTask';

class Fabric {
  create(type, options = {}) {
    console.log(type);
    switch (type) {
      case 'task':
        return new TimeTask(options);
        break;
    }
  }
}

export default Fabric;
