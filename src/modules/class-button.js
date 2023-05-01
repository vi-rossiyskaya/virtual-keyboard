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
  }

  onClick() {
    this.textarea.value += this.value;
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
