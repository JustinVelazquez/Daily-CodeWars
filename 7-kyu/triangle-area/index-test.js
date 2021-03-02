const chai = require("chai");
const assert = chai.assert;

describe("Basic test", function() {
  it("First triangle area", function() {
    assert.equal(tArea('\n.\n. .\n'), 0.5)
  });
  
  it("Second triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n'), 2)
  });
  
  it("Third triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32)
  });
  
  it("Forth triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), 8)
  });
});
