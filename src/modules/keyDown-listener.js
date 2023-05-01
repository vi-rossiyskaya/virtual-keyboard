import toggleActive from './toggleActiveClass';
import { shiftPressed } from './flags';
import { capsPressed } from './flags';

export default function keyboardListener(event) {
  event.preventDefault();
  if (event.key === 'Shift') {
    shiftPressed = true;
    const currentBtns = document.querySelectorAll('.button__content_active');
    currentBtns.forEach(elem => {
      toggleActive(elem);
    })
    const shiftBtns = document.querySelectorAll('[data-type="valueShift"]');
    shiftBtns.forEach(elem => {
      toggleActive(elem);
    })
  }
  if (event.key === 'CapsLock') {
    capsPressed = capsPressed ? false : true; 
  }

  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) {
    const click = new Event('click');
    targetBtn.dispatchEvent(click);
    targetBtn.classList.add('button_active');
  }
}