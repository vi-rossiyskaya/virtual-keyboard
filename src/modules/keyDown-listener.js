import toggleActive from './toggleActiveClass';
import { toggleShiftFlag } from './flags';
import {
  addPressedValue, checkPressed, changeLangVar, getLang,
} from './switch-lang-helper';
import keys from './keys';
import renderButtons from './render-buttons';

export default function keyboardListener(event) {
  event.preventDefault();

  addPressedValue(event.code);
  if (checkPressed()) {
    const keyboardContainer = document.querySelector('.keyboard-container');
    keyboardContainer.innerHTML = '';
    renderButtons(getLang(), keyboardContainer, keys);
    changeLangVar();
  }

  if (event.key === 'Shift') {
    toggleShiftFlag();
    const currentBtns = document.querySelectorAll('.button__content_active');
    currentBtns.forEach((elem) => {
      toggleActive(elem);
    });
    const shiftBtns = document.querySelectorAll('[data-type="valueShift"]');
    shiftBtns.forEach((elem) => {
      toggleActive(elem);
    });
  }

  if (event.key === 'CapsLock') {
    if (event.getModifierState('CapsLock')) {
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

  if (event.code === 'Backspace') {
    const textArea = document.querySelector('.textarea');
    textArea.value = textArea.value.slice(0, textArea.value.length - 1);
  }

  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) {
    const click = new Event('click');
    targetBtn.dispatchEvent(click);
    targetBtn.classList.add('button_active');
  }
}