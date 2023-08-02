audioconst allButton = document.querySelectorAll(`.drum`);

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
      document.querySelector(`#tom-1`).play();
      break;
    case `a`:
      document.querySelector(`#tom-2`).play();
      break;
    case `s`:
      document.querySelector(`#tom-3`).play();
      break;
    case `d`:
      document.querySelector(`#tom-4`).play();
      break;
    case `j`:
      document.querySelector(`#snare`).play();
      break;
    case `k`:
      document.querySelector(`#kick-bass`).play();
      break;
    case `l`:
      document.querySelector(`#crash`).play();
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
