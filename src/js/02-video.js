import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new vimeo(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const localObj = localStorage.getItem(LOCAL_STORAGE_KEY);

function callback(timePlayed) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(timePlayed));
}

player.on('timeupdate', throttle(callback, 1000));
player.setCurrentTime(JSON.parse(localObj).seconds);
