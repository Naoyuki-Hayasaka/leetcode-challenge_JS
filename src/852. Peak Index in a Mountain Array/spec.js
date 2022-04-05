const { expect } = require("chai");
const { peakIndexInMountainArray } = require(".");

describe("852. Peak Index in a Mountain Array", () => {
  it("should be return 1", () => {
    const arr = [0, 1, 0];
    expect(peakIndexInMountainArray(arr)).to.equal(1);
  });
  it("should be return 1", () => {
    const arr = [0, 2, 1, 0];
    expect(peakIndexInMountainArray(arr)).to.equal(1);
  });
  it("should be return 1", () => {
    const arr = [0, 10, 5, 2];
    expect(peakIndexInMountainArray(arr)).to.equal(1);
  });
  it("should be return 5", () => {
    const arr = [0, 1, 2, 3, 4, 5, 4, 3];
    expect(peakIndexInMountainArray(arr)).to.equal(5);
  });
  it("should be return 1", () => {
    const arr = [5, 10, 9, 5, 4, 3, 2, 0];
    expect(peakIndexInMountainArray(arr)).to.equal(1);
  });
  it("should be return 1", () => {
    const arr = [9, 10, 9, 8, 7, 6, 5, 4, 3];
    expect(peakIndexInMountainArray(arr)).to.equal(1);
  });
  it("should be return 6", () => {
    const arr = [3, 5, 7, 9, 10, 11, 13, 11, 10];
    expect(peakIndexInMountainArray(arr)).to.equal(6);
  });
});
