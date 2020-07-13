export function lettersCounter (str: string) {
  if(!str.match(/^[A-Za-z]+$/))
    throw new Error('Unexpected string');

  const expectedArray: Array<string | number> = [];
  let counter = 0;

  str.split('').forEach((ltr: string, i) => {
    let nextLetter: string | undefined = str[i + 1];

    if (ltr === nextLetter)
      counter++
    else {
      expectedArray.push(ltr, ++counter);
      counter = 0;
    }
  });

  return expectedArray
    .filter(number => number !== 0 && number !== 1)
    .join('');
}
