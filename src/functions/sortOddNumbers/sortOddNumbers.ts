function isOdd(num: number): boolean {
  const result = num % 2;
  return !!result;
}

export function getOddNumbers(array: number[]): number[] {
  return array.filter(isOdd);
}

export function sortOddNumbers(array: number[]): number[] {
  const arrayForSort = [...array];
  return arrayForSort.sort((a, b) => a - b);
}

export function sort(array: number[]): number[] {
  if (array.length === 0) return array;

  const oddNumbers = getOddNumbers(array);

  if (oddNumbers.length === 0) return array;

  let acc = 0;
  const sortedOddNumbers = sortOddNumbers(oddNumbers);
  const preparedArray: number[] = [];

  array.forEach((num) => {
    if (isOdd(num)) {
      preparedArray.push(sortedOddNumbers[acc]);
      acc++;
    } else {
      preparedArray.push(num);
    }
  });

  return preparedArray;
}
