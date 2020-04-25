import { generateRandomHex } from "./randomHexNumber";

describe("randomHexNumber.ts", () => {
  it("should return valid hex value", () => {
    const test = /^#[a-f0-9]/i;
    const hex = generateRandomHex();
    expect(hex).toMatch(test);
  });
});
