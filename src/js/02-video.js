import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});


// working in the event on
player.on('play', function () {
  console.log('played the video!');
});

//working in the event timeUpdate using throttle
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);


// recargar la pagina desde el punto en el que estaba el video
const currentTime = localStorage.getItem('videoplayer-current-time');
function getCurrentTime(current) {
  if (current === null || current === undefined) {
    return 0;
  }
  return current;
}
player
  .setCurrentTime(getCurrentTime(currentTime))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });