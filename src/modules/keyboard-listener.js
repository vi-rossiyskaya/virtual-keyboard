export default function keyboardListener(event) {
  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  const click = new Event('click');
  targetBtn.dispatchEvent(click);
}