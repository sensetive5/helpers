export function generateStringWithCustomDivider (...args: string[]) {
  const [divider, ...letters] = args;

  return letters.join(divider);
}
