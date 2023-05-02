import toggleActive from './toggleActiveClass';
import { toggleShiftFlag } from './flags';
import {
  addPressedValue, checkPressed, changeLangVar, getLang,
} from './switch-lang-helper';
import { handleCapslockKeyDown } from './handle-capslock';
import keys from './keys';
import renderButtons from './render-buttons';
import handleBackspace from './handle-backspace';

export default function keyboardListener(event) {
  event.preventDefault();

  addPressedValue(event.code);
  if (checkPressed()) {
    const keyboardContainer = document.querySelector('.keyboard-container');
    keyboardContainer.innerHTML = '';
    changeLangVar();
    renderButtons(getLang(), keyboardContainer, keys);
  }

  if (event.key === 'Shift') {
    toggleShiftFlag();
    const currentBtns = document.querySelectorAll('.button__content_active');
    currentBtns.forEach((elem) => {
      toggleActive(elem);
    });
    if (event.getModifierState('CapsLock')) {
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

  if (event.key === 'CapsLock') {
    handleCapslockKeyDown(event);
  }

  if (event.code === 'Backspace') {
    handleBackspace();
  }

  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) {
    const click = new Event('click');
    targetBtn.dispatchEvent(click);
    targetBtn.classList.add('button_active');
  }
}
