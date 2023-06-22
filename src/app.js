import renderButtons from './modules/render-buttons';
import keys from './modules/keys';
import handleKeyDown from './modules/keyDown-listener';
import handleKeyUp from './modules/keyUp-listener';
import { getLang } from './modules/switch-lang-helper';

import './index.html';
import './style.css';

const body = document.querySelector('body');
const main = document.createElement('main');
const heading = document.createElement('h1');
const paragraph = document.createElement('p');
const textArea = document.createElement('textarea');
const keyboardContainer = document.createElement('div');

main.classList.add('main');
heading.classList.add('heading');
paragraph.classList.add('message');
textArea.classList.add('textarea');
keyboardContainer.classList.add('keyboard-container');

heading.textContent = 'Virtual Keyboard';
paragraph.textContent = 'Клавиатура создана в macOS. \n Для переключения используйте Ctrl + Alt';

main.append(heading, paragraph, textArea, keyboardContainer);
body.append(main);
renderButtons(getLang(), keyboardContainer, keys);

document.addEventListener('keydown', (event) => {
  handleKeyDown(event);
});

document.addEventListener('keyup', (event) => {
  handleKeyUp(event);
});
