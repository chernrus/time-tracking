
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
    var firstArr = first.split(':'),
      secondArr = second.split(':'),
      hours = parseInt(firstArr[0]) + parseInt(secondArr[0]),
      minutes = parseInt(firstArr[1]) + parseInt(secondArr[1]);

    hours = (minutes >= 60) ? hours + 1 : hours;
    minutes = (minutes >= 60) ? minutes - 60 : minutes;

    return `${(hours > 9 ? hours : (`0${hours}`))}:${(minutes > 9 ? minutes : (`0${minutes}`))}`;
  }

  function showModal(str) {
    const modal = document.createElement('div'),
      text = document.createElement('p');

    modal.className = 'clipboard-modal';
    text.className = 'clipboard-modal__text';
    text.innerText = `${str} added in clipboard`;

    modal.appendChild(text);

    modal.style.position = 'absolute';
    modal.style.bottom = '0';
    modal.style.left = '0';
    modal.style.right = '0';
    modal.style.margin = 'auto';

    text.style.margin = '0 auto';
    text.style.width = '200px';
    text.style.padding = '10px';
    text.style.backgroundColor = '#111';
    text.style.color = '#fff';
    text.style.textAlign = 'center';

    document.body.appendChild(modal);

    setTimeout(()=>{document.body.removeChild(modal);}, 1500);
  }

  function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    showModal(str);
  }

  return {
    getData,
    checkData,
    sumTime,
    copyToClipboard
  }

}());
