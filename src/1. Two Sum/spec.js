const { expect } = require("chai");
const { twoSum } = require(".");

describe("1. Two Sum", () => {
  it("should be return [0, 1]", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).to.deep.equal([0, 1]);
  });
  it("should be return [1, 2]", () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).to.deep.equal([1, 2]);
  });
  it("should be return [0, 1]", () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).to.deep.equal([0, 1]);
  });
});
