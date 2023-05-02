const pressed = new Set();
const langs = ['en', 'ru'];
let lang = langs[0];

export const switchSequence = ['ControlLeft', 'AltLeft'];

export function addPressedValue(code) {
  pressed.add(code);
}

export function checkPressed() {
  let result = true;
  switchSequence.forEach((code) => {
    if (!pressed.has(code)) {
      result = false;
    }
  });
  return result;
}

export function clearPressed() {
  pressed.clear();
}

export function changeLangVar() {
  lang = lang === langs[0] ? langs[1] : langs[0];
}

export function getLang() {
  return lang;
}
