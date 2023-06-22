import { clearPressed } from './switch-lang-helper';
import { handleCapslockKeyUp } from './handle-capslock';
import { handleShiftKeyUp } from './handle-shift';

export default function handleKeyUp(event) {
  clearPressed();
  if (event.key === 'Shift') {
    handleShiftKeyUp(event);
  }

  if (event.key === 'CapsLock') {
    handleCapslockKeyUp(event);
  }

  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) targetBtn.classList.remove('button_active');
}
