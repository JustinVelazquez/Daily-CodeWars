describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
    Test.assertEquals(sortVowels('Rnd Te5T'), 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
    Test.assertEquals(sortVowels(1337), '');
    Test.assertEquals(sortVowels(undefined), '');
  });
});
