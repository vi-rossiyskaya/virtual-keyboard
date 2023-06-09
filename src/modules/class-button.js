import createSpan from './createSpan';
import handleBackspace from './handle-backspace';
import {
  handleCapslockKeyDown, handleCapslockKeyUp, toggleCapslock, isCapslockOn,
} from './handle-capslock';
import {
  handleShiftKeyDown, handleShiftKeyUp, isShiftOn,
} from './handle-shift';

export default class Button {
  constructor(buttonData, code) {
    this.label = buttonData.key;
    this.valueNormal = buttonData.valueNormal;
    this.valueShift = buttonData.valueShift;
    this.valueCaps = buttonData.valueCaps;
    this.valueShiftCaps = buttonData.valueShiftCaps;
    this.modifier = buttonData.modifier;
    this.code = code;
    this.textarea = document.querySelector('.textarea');
    this.element = this.createButton();
    this.element.addEventListener('click', (e) => {
      this.onClick(e);
    });
  }

  onClick(e) {
    if (e.isTrusted && this[e.target.dataset.type] !== undefined) {
      this.textarea.value += this[e.target.dataset.type];
      if (e.target.dataset.code === 'Backspace') {
        handleBackspace();
      }
      if (e.target.dataset.code === 'CapsLock') {
        e.target.parentNode.classList.toggle('button_active');
        toggleCapslock();
        if (isCapslockOn()) {
          handleCapslockKeyDown(e);
        } else {
          handleCapslockKeyUp(e);
        }
      }
      if (e.target.dataset.code === 'ShiftLeft' || e.target.dataset.code === 'ShiftRight') {
        e.target.parentNode.classList.toggle('button_active');
        if (!isShiftOn()) {
          handleShiftKeyDown(e);
        } else {
          handleShiftKeyUp(e);
        }
      }
    } else {
      const targetBtn = e.target;
      const activeElem = targetBtn.querySelector('.button__content_active');
      if (!this.modifier) {
        this.textarea.value += this[activeElem.dataset.type];
      }
    }
  }

  createButton() {
    const button = document.createElement('button');
    const normalText = createSpan(this.modifier ? this.label : this.valueNormal, this.code, 'valueNormal', true);
    const shiftText = createSpan(this.modifier ? this.label : this.valueShift, this.code, 'valueShift', false);
    const capText = createSpan(this.modifier ? this.label : this.valueCaps, this.code, 'valueCaps', false);
    const shiftCapText = createSpan(this.modifier ? this.label : this.valueShiftCaps, this.code, 'valueShiftCaps', false);
    button.append(normalText);
    button.append(shiftText);
    button.append(capText);
    button.append(shiftCapText);
    button.classList.add('button');
    button.dataset.code = this.code;
    return button;
  }

  render(container) {
    container.appendChild(this.element);
  }
}
