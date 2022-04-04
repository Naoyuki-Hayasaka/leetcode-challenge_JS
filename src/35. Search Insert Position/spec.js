const { expect } = require("chai");
const { searchInsert } = require(".");

describe("35. Search Insert Position", () => {
  it("should be return 2", () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    expect(searchInsert(nums, target)).to.equal(2);
  });
  it("should be return 1", () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    expect(searchInsert(nums, target)).to.equal(1);
  });
  it("should be return 4", () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    expect(searchInsert(nums, target)).to.equal(4);
  });
  it("should be return 0", () => {
    const nums = [1, 3, 5, 6];
    const target = 0;
    expect(searchInsert(nums, target)).to.equal(0);
  });
});
