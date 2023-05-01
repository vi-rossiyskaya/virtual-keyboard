import renderButtons from './modules/render-buttons';
import keys from './modules/keys';
import handleKeyDown from './modules/keyDown-listener';
import handleKeyUp from './modules/keyUp-listener';

const body = document.querySelector('body');
const main = document.createElement('main');
const textArea = document.createElement('textarea');
const keyboardContainer = document.createElement('div');

main.classList.add('main');
textArea.classList.add('textarea');
keyboardContainer.classList.add('keyboard-container');

main.append(textArea, keyboardContainer);
body.append(main);

renderButtons('en', keyboardContainer, keys);

document.addEventListener('keydown', (event) => {
  handleKeyDown(event);
})

document.addEventListener('keyup', (event) => {
  handleKeyUp(event);
})