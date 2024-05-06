/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){

	const method=video.paused?'play':'pause'

	video[method]();
}

function toggleButton(){

	const icon=this.paused?'►':'❚ ❚'

	toggle.textContent=icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function handlePlaybackSpeedChange() {
  video.playbackRate = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}




video.addEventListener('click',togglePlay)

toggle.addEventListener('click',togglePlay)

video.addEventListener('play',updateButton)

video.addEventListener('pause',updateButton)

video.addEventListener('timeupdate',handleProgress)

ranges.addEventListener('change', handleVolumeChange);

ranges.addEventListener('mousemove', handleVolumeChange);

playbackSpeed.addEventListener('change', handlePlaybackSpeedChange);

playbackSpeed.addEventListener('mousemove', handlePlaybackSpeedChange);

skipButtons.forEach(button => button.addEventListener('click', skip));