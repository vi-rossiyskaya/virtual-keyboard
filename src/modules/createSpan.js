export default function createSpan(data, code, type, active) {
  const span = document.createElement('span');
  span.textContent = data;
  span.classList.add('button__content');
  if (active) {
    span.classList.add('button__content_active');
  }
  span.dataset.code = code;
  span.dataset.type = type;
  return span;
}
