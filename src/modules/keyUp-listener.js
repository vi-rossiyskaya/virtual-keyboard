export default function handleKeyUp(event) {
  const targetBtn = document.querySelector(`[data-code=${event.code}]`);
  if (targetBtn) targetBtn.classList.remove('button_active');
}