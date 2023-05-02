import toggleActive from './toggleActiveClass';
import { toggleShiftFlag } from './flags';
import { clearPressed } from './switch-lang-helper';

export default function handleKeyUp(event) {
  clearPressed();
  if (event.key === 'Shift') {
    toggleShiftFlag();

    if (event.getModifierState('CapsLock')) {
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
  if (event.key === 'CapsLock') {
    if (!event.getModifierState(event.key)) {
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

  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) targetBtn.classList.remove('button_active');
}
