export default function createSpan(data, type) {
  const span  = document.createElement('span');
  span.textContent = data;
  span.classList.add('button__content');
  span.classList.add('button__content_active');
  span.dataset.type = type;
  return span
}