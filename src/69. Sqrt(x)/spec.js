const { expect } = require("chai");
const { mySqrt } = require(".");

describe("69. Sqrt(x)", () => {
  it("should be return 2", () => {
    const num = 4;
    expect(mySqrt(num)).to.equal(2);
  });
  it("should be return 2", () => {
    const num = 8;
    expect(mySqrt(num)).to.equal(2);
  });
});
