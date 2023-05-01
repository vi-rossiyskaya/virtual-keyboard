export default class Button {
  constructor(buttonData, code) {
    this.label = buttonData.key;
    this.value = buttonData.value;
    this.code = code;
    this.textarea = document.querySelector('.textarea');
    this.element = this.createButton();
    this.element.addEventListener('click', () => {
      this.onClick();
    });
    this.element.addEventListener('transitionend', (e) => {
      this.onTransitionend(e)
    })
  }

  onClick() {
    this.textarea.value += this.value;
    this.element.classList.add('button_active');
  }

  onTransitionend(event) {
    if (event.propertyName === 'background-color') {
      this.element.classList.remove('button_active');
    }
  }

  createButton() {
    const button = document.createElement('button');
    button.textContent = this.label;
    button.classList.add('button');
    button.dataset.code = this.code;
    return button;
  }

  render(container) {
    container.appendChild(this.element);
  }
}
