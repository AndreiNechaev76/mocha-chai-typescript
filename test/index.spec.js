import { expect } from "chai";
import { add } from "../src/index";

describe("add", () => {
  it("should add 2 numbers", () => {
    expect(add(2, 2)).to.equal(4);
  });
});
