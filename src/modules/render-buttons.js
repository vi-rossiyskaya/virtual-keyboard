import Button from "./class-button";

export default function renderButtons(lang, container, keys) {
  console.log(keys[lang])
  for (let code in keys[lang]) {
    const button = new Button(keys[lang][code].key, code);
    button.render(container);
  }
}