import Button from './class-button';

export default function renderButtons(lang, container, keys) {
  const keysBtn = Object.keys(keys[lang]);
  keysBtn.forEach((code) => {
    const button = new Button(keys[lang][code], code);
    button.render(container);
  });
}
