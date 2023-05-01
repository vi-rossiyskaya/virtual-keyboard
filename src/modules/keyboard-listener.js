export default function keyboardListener(event) {
  console.log(event)
  if (event.code === 'Tab') {
    event.preventDefault();
  }
  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) {
    const click = new Event('click');
    targetBtn.dispatchEvent(click);
  }
}