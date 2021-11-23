function play(id) {
    const audioElement = document.getElementById(id);
  
  resetAll();

    if (audioElement.paused) {
        audioElement.play();
    }
}

function resetAll() {
  const audioElements = document.querySelectorAll('audio[id^="sound-"]');
  
  audioElements.forEach(audioElement => {
    audioElement.pause();
    audioElement.currentTime = 0;
  });
}