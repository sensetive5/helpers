export function generateRandomHex() {
  const hex = Math.random().toString(16).slice(2, 8);
  return `#${hex}`;
}
