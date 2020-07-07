export function sumElements(array: any[]) {
  return array
    .flat(Infinity)
    .filter(num => !isNaN(parseInt(num)))
    .reduce((total: number, elem) => total + parseInt(elem), 0);
}
