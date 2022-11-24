import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new vimeo(iframe);
const localObj = localStorage.getItem('videoplayer-current-time');

function callback(timePlayed) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(timePlayed));
}

player.on('timeupdate', throttle(callback, 1000));
player.setCurrentTime(JSON.parse(localObj).seconds);
