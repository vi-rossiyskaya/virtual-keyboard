import toggleActive from './toggleActiveClass';
import { shiftPressed } from './flags';
import { capsPressed } from './flags';

export default function handleKeyUp(event) {
  shiftPressed = false;
  const shiftBtns = document.querySelectorAll('[data-type="valueShift"]');
  shiftBtns.forEach(elem => {
    toggleActive(elem);
  })

  if (capsPressed) {
    const capsBtns = document.querySelectorAll('[data-type="valueCaps"]');
    capsBtns.forEach(elem => {
      toggleActive(elem);
    })
  } else {
    const normalBtns = document.querySelectorAll('[data-type="valueNormal"]');
    normalBtns.forEach(elem => {
      toggleActive(elem);
    })
  }

  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) targetBtn.classList.remove('button_active');
}