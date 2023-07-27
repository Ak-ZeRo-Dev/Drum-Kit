const allButton = document.querySelectorAll(`.drum`);

// Add click event
allButton.forEach((ele) => {
  ele.addEventListener(`click`, (e) => {
    const button = e.target.innerHTML;
    check(button);
    animationPress(button);
  });
});

// Add keyboard event
document.addEventListener(`keypress`, (e) => {
  const key = e.key;
  check(key);
  animationPress(key);
});

// Check any key was pressed
function check(button) {
  let audio;
  switch (button) {
    case `w`:
      audio = new Audio(`../sounds/tom-1.mp3`);
      audio.play();
      break;
    case `a`:
      audio = new Audio(`../sounds/tom-2.mp3`);
      audio.play();
      break;
    case `s`:
      audio = new Audio(`../sounds/tom-3.mp3`);
      audio.play();
      break;
    case `d`:
      audio = new Audio(`../sounds/tom-4.mp3`);
      audio.play();
      break;
    case `j`:
      audio = new Audio(`../sounds/snare.mp3`);
      audio.play();
      break;
    case `k`:
      audio = new Audio(`../sounds/kick-bass.mp3`);
      audio.play();
      break;
    case `l`:
      audio = new Audio(`../sounds/crash.mp3`);
      audio.play();
      break;
    default:
      Error(`Not Found Audio`);
      break;
  }
}

// Animation
function animationPress(drum) {
  allButton.forEach((e) => {
    if (e.classList.contains(`${drum}`)) {
      e.classList.add(`pressed`);
    }
    setTimeout(() => {
      e.classList.remove(`pressed`);
    }, 100);
  });
}
