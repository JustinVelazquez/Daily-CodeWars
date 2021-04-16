const { assert } = require('chai');

it('example tests', () => {
  assert.strictEqual(
    sortBytes(0xdeadbeef),
    0xefdebead,
    'failed: sortBytes(0xdeadbeef)'
  );
  assert.strictEqual(
    sortBytes(0xdadb0d),
    0xdbda0d00,
    'failed: sortBytes(0xdadb0d)'
  );
});
it('property tests', () => {
  for (let i = 100; i--; ) {
    const x = Math.floor(Math.random() * 2 ** 32);
    assert(
      sortBytes(x) >= x,
      `failed property: sortBytes(x) >= x where: x = ${x}`
    );
  }
});
