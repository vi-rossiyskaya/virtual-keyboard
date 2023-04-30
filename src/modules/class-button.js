export default class Button {
  constructor(key, code) {
    this.key = key;
    this.code = code;
    this.element = this.createButton();
    this.element.addEventListener('click', () => {
      this.onClick();
    });
  }

  onClick() {
    console.log(`Clicked button ${this.key}`);
  }

  createButton() {
    const button = document.createElement('button');
    button.textContent = this.key;
    button.classList.add('button');
    return button;
  }

  render(container) {
    container.appendChild(this.element);
  }
}
