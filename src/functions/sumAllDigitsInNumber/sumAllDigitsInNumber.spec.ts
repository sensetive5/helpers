import { sumAllDigitsInNumber } from './sumAllDigitsInNumber'

describe('sumAllDigitsInNumber', () => {
  it('should sum all digits in number', () => {
    const number = 123123;
    expect(sumAllDigitsInNumber(number)).toBe(3);
  })
})
