const { expect } = require("chai");
const { iaPerfectSquare } = require(".");

describe("367. Valid Perfect Square", () => {
  it("should be return true", () => {
    const num = 16;
    expect(iaPerfectSquare(num)).to.equal(true);
  });
  it("should be return false", () => {
    const num = 14;
    expect(iaPerfectSquare(num)).to.equal(false);
  });
  it("should be return true", () => {
    const num = 1;
    expect(iaPerfectSquare(num)).to.equal(true);
  });
  it("should be return true", () => {
    const num = 256;
    expect(iaPerfectSquare(num)).to.equal(true);
  });
  it("should be return false", () => {
    const num = 2;
    expect(iaPerfectSquare(num)).to.equal(false);
  });
});
