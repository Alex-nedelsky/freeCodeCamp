function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
  document.getElementById('display').innerHTML = sound.toUpperCase();
}

document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();
  if (key === 'q' || key === 'w' || key === 'e' || key === 'a' || key === 's' || key === 'd' || key === 'z' || key === 'x' || key === 'c') {
    playSound(key);
    document.getElementById(key).classList.add('active');}