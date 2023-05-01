import Button from "./class-button";

export default function renderButtons(lang, container, keys) {
  for (let code in keys[lang]) {
    const button = new Button(keys[lang][code], code);
    button.render(container);
  }
}