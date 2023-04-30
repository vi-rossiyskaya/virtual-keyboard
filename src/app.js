import Button from './modules/class-button';

const body = document.querySelector('body');
const main = document.createElement('main');
const textArea = document.createElement('textarea');
const keyboardContainer = document.createElement('div');

main.classList.add('main');
textArea.classList.add('textarea');
keyboardContainer.classList.add('keyboard-container');

main.append(textArea, keyboardContainer);
body.append(main);

const button = new Button('1', 'a');
button.render(keyboardContainer);
