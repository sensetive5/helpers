import { lettersCounter } from './lettersCounter'

describe('lettersCounter', () => {
  it ('should count letters in string', () => {
    const rawString = 'AAABBBCCDXYZAAAAAABBBBBBBBBBB';
    expect(lettersCounter(rawString)).toEqual('A3B3C2DXYZA6B11');
  });

  it ('should throw an error when string is unexpeced', () => {
    const rawString = 'AAA_BBB_CC_DXYZ_AAAAAA_BBBBBBBBBBB';
    expect(() => lettersCounter(rawString)).toThrow();
  });
});
