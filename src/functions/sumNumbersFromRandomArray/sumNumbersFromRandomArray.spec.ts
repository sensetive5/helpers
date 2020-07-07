import { sumElements } from './sumNumbersFromRandomArray';

describe('sumNumbersFromRandomArray', () => {
  it('should recursively sum all elements from array', () => {
    const rawArray = ['1', '2', 'x3', '3x', 'a', [1, [2, 3, 1]]];
    const result = sumElements(rawArray);
    expect(result).toBe(13);
  });
});
