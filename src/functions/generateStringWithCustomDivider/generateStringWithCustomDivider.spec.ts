import {
  generateStringWithCustomDivider
} from './generateStringWithCustomDivider'

describe('generateStringWithCustomDivider', () => {
  it ('should generate string with custom divider', () => {
    expect(generateStringWithCustomDivider('.', 'a', 'b', 'c')).toBe('a.b.c');
    expect(generateStringWithCustomDivider('-', 'a', 'b', 'c')).toBe('a-b-c');
  });
});
