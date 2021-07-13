describe('Example tests', () => {
  it('should handle example case', () => {
    Test.assertEquals(
      removeConsecutiveDuplicates(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
      ),
      'alpha beta gamma delta alpha beta gamma delta'
    );
  });
});
