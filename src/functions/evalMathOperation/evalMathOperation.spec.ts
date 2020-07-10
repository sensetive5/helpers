import { evalMathOperation } from './evalMathOperation'

describe('evalMathOperation', () => {
  it ('should return result of math operation', () => {
    expect(evalMathOperation(10)('/')(2)()).toBe(5);
  });
});
