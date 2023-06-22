const pressed = new Set();
const langs = ['en', 'ru'];
const lang = langs[0];

function setLocalStorage(language) {
  localStorage.setItem('lang_key', language);
}

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
  if (localStorage.getItem('lang_key')) {
    if (localStorage.getItem('lang_key') === langs[0]) {
      setLocalStorage(langs[1]);
    } else {
      setLocalStorage(langs[0]);
    }
  } else {
    setLocalStorage(lang === langs[0] ? langs[1] : langs[0]);
  }
}

export function getLang() {
  return localStorage.getItem('lang_key') ? localStorage.getItem('lang_key') : lang;
}
