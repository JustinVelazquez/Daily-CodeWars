describe('Black Square tests', function () {
  it('basic tests', function () {
    [
      { a: [2, 3, 4, 1], ans: [4, 1, 2, 3] },
      { a: [1, 3, 2], ans: [1, 3, 2] },
      { a: [1, 2], ans: [1, 2] },
    ].forEach((t) =>
      Test.assertDeepEquals(
        presents(t.a),
        t.ans,
        `wrong answer in test a=[${t.a}]`
      )
    );
  });
});
