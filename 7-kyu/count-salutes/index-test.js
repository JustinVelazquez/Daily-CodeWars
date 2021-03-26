const { assert } = require('chai');

describe('Solution test', () => {
  const act = (hallway, expected) => {
    const actual = countSalutes(hallway);
    const input = hallway;
    it(`input: ${input} expected: ${expected} actual: ${actual}`, () =>
      assert.strictEqual(actual, expected));
  };
  describe('Fixed tests', () => {
    act('<---->---<---<-->', 4);
    act('------', 0);
    act('>>>>>>>>>>>>>>>>>>>>>----<->', 42);
    act('<<----<>---<', 2);
    act('>', 0);
  });
});
