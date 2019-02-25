import './styles/index.css';
import mediator from './modules/Mediator';
import TimeTracker from './modules/app';


function kek(data) {
  console.log(data);
}

mediator.subscribe('ha', kek);

window.onload = () => {
  TimeTracker.init();
}
