let shiftPressed = false;
let capsPressed = false;

export function toggleShiftFlag() {
  shiftPressed = !shiftPressed;
}
export function toggleCapsFlag() {
  capsPressed = !capsPressed;
}

export function getCapsFlag() {
  return capsPressed;
}
