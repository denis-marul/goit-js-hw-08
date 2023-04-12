import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME = 'videoplayer-current-time';

function onPlay(event) {
  localStorage.setItem(TIME, event.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
function setCurrentTime() {
  if (!localStorage.getItem(TIME)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(TIME));
}
setCurrentTime();
