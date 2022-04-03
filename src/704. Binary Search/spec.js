const { expect } = require("chai");
const { search } = require(".");

describe("704. Binary Search", () => {
  it("should be return 4", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    expect(search(nums, target)).to.equal(4);
  });
  it("should be return -1", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    expect(search(nums, target)).to.equal(-1);
  });
  it("should be return 2", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 3;
    expect(search(nums, target)).to.equal(2);
  });
});
