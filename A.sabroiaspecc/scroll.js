var scrollBool = false;
var secondsClicked = 0;
let audioCtx;
let track;

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioElement = document.querySelector('audio');
const playButton = document.querySelector('.playpause');
playButton.addEventListener('click', function () {
  if (!audioCtx) {
    init();
  }
  // context suspended? (autoplay policy)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  } 
  //if not playing - play
  if (this.dataset.playing === 'false') {
    audioElement.play();
    
    this.dataset.playing = 'true';
    // if track is playing - pause
  } else if (this.dataset.playing === 'true') {
    audioElement.pause();
    this.dataset.playing = 'false';
  }
  let state = this.getAttribute('aria-checked') === "true" ? true : false;
  this.setAttribute('aria-checked', state ? "false" : "true");
}, false);

function init() {
  audioCtx = new AudioContext();
  track = audioCtx.createMediaElementSource(audioElement);
  track.loop = true;
  // volume
  const gainNode = audioCtx.createGain();
  const volumeControl = document.querySelector('[data-action="volume"]');
  volumeControl.addEventListener('input', function () {
    gainNode.gain.value = this.value;
  }, false);
  //	connect 
  track.connect(gainNode).connect(audioCtx.destination);
}
function scroll() {
  if (!scrollBool) {
    return;
  }
  window.scrollBy(0, 1);
  // time = 30
  setTimeout(scroll, 40);
}
scroll();
$('.playpause').click(function () {
  scrollBool = !scrollBool;
  scroll();
}
);
  