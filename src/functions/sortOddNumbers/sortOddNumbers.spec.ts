import { sort } from "./sortOddNumbers";

describe("sortOddNumbers.ts", () => {
  it("should sort odd numbers in array of numbers", () => {
    const sourceArray = [1, 4, 7, 3, 2, 8];
    const expectedArray = [1, 4, 3, 7, 2, 8];

    expect(sort(sourceArray)).toEqual(expectedArray);
  });
});
