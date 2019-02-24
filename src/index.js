import './styles/index.css';
import mediator from './modules/Mediator';
import TimeTracker from './modules/app';
import mask from './lib/mask';


function kek(data) {
  console.log(data);
}

mediator.subscribe('ha', kek);

window.onload = () => {
  TimeTracker.init();
}
