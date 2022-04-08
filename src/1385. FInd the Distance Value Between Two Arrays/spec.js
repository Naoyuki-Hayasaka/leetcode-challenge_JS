const { expect } = require("chai");
const { findTheDistanceValue } = require(".");

describe("1385. FInd the Distance Value Between Two Arrays", () => {
  it("should be return 2", () => {
    const arr1 = [4, 5, 8];
    const arr2 = [10, 9, 1, 8];
    const d = 2;
    expect(findTheDistanceValue(arr1, arr2, d)).to.equal(2);
  });
  it("should be return 2", () => {
    const arr1 = [1, 4, 2, 3];
    const arr2 = [-4, -3, 6, 10, 20, 30];
    const d = 3;
    expect(findTheDistanceValue(arr1, arr2, d)).to.equal(2);
  });
  it("should be return 1", () => {
    const arr1 = [2, 1, 100, 3];
    const arr2 = [-5, -2, 10, -3, 7];
    const d = 6;
    expect(findTheDistanceValue(arr1, arr2, d)).to.equal(1);
  });
});
