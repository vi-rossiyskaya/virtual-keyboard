import toggleActive from './toggleActiveClass';

let capslockOn = false;

export function toggleCapslock() {
  capslockOn = !capslockOn;
}

export function isCapslockOn() {
  return capslockOn;
}

export function handleCapslockKeyDown(event) {
  if (event.getModifierState('CapsLock') || capslockOn) {
    const currentBtns = document.querySelectorAll('.button__content_active');
    currentBtns.forEach((elem) => {
      toggleActive(elem);
    });
    const capsBtns = document.querySelectorAll('[data-type="valueCaps"]');
    capsBtns.forEach((elem) => {
      toggleActive(elem);
    });
  }
}

export function handleCapslockKeyUp(event) {
  if (!event.getModifierState(event.key) || !capslockOn) {
    const currentBtns = document.querySelectorAll('.button__content_active');
    currentBtns.forEach((elem) => {
      toggleActive(elem);
    });
    const normalBtns = document.querySelectorAll('[data-type="valueNormal"]');
    normalBtns.forEach((elem) => {
      toggleActive(elem);
    });
  }
}
