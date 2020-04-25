import { build } from "./countLettersInString";

describe("countLettersInString.ts", () => {
  it("should count letters in string", () => {
    const sourceString = "AAAABBBCCZA";
    const expectedString = "A5B3C2Z";

    expect(build(sourceString)).toBe(expectedString);
  });
});
