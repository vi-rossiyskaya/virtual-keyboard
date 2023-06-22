import toggleActive from './toggleActiveClass';
import { isCapslockOn } from './handle-capslock';

let shiftOn = false;

export function toggleShift() {
  shiftOn = !shiftOn;
}

export function isShiftOn() {
  return shiftOn;
}

export function handleShiftKeyDown(event) {
  toggleShift();
  const currentBtns = document.querySelectorAll('.button__content_active');
  currentBtns.forEach((elem) => {
    toggleActive(elem);
  });
  if (event.getModifierState('CapsLock') || isCapslockOn()) {
    const shiftBtns = document.querySelectorAll('[data-type="valueShiftCaps"]');
    shiftBtns.forEach((elem) => {
      toggleActive(elem);
    });
  } else {
    const shiftBtns = document.querySelectorAll('[data-type="valueShift"]');
    shiftBtns.forEach((elem) => {
      toggleActive(elem);
    });
  }
}

export function handleShiftKeyUp(event) {
  toggleShift();

  if (event.getModifierState('CapsLock') || isCapslockOn()) {
    const capsBtns = document.querySelectorAll('[data-type="valueShiftCaps"]');
    capsBtns.forEach((elem) => {
      toggleActive(elem);
    });
    const normalBtns = document.querySelectorAll('[data-type="valueCaps"]');
    normalBtns.forEach((elem) => {
      toggleActive(elem);
    });
  } else {
    const shiftBtns = document.querySelectorAll('[data-type="valueShift"]');
    shiftBtns.forEach((elem) => {
      toggleActive(elem);
    });
    const normalBtns = document.querySelectorAll('[data-type="valueNormal"]');
    normalBtns.forEach((elem) => {
      toggleActive(elem);
    });
  }
}
