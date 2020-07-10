export function evalMathOperation (start: number) {
  const array: Array<string | number> = [ start ];

  return function inner(value: string | number | undefined) {
    if (value === undefined)
      return eval(array.join(''));

    array.push(value);
    return inner;
  }
}
