export default function handleBackspace() {
  const textArea = document.querySelector('.textarea');
  textArea.value = textArea.value.slice(0, textArea.value.length - 1);
}
