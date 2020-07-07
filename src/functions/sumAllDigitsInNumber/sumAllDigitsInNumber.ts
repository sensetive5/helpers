export function sumAllDigitsInNumber(number: number): number {
  const simpleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (simpleNumbers.includes(number))
    return number;

  const summary = number
    .toString()
    .split('')
    .reduce((sum, num) => sum + parseInt(num), 0);

  return sumAllDigitsInNumber(summary);
}
