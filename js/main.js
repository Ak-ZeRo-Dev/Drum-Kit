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
  switch (button) {
    case `w`:
      document.getElementById(`tom-1`).play();
      break;
    case `a`:
      document.getElementById(`tom-2`).play();
      break;
    case `s`:
      document.getElementById(`tom-3`).play();
      break;
    case `d`:
      document.getElementById(`tom-4`).play();
      break;
    case `j`:
      document.getElementById(`snare`).play();
      break;
    case `k`:
      document.getElementById(`kick-bass`).play();
      break;
    case `l`:
      document.getElementById(`crash`).play();
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
