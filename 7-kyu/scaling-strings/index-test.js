function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

describe('Scaling', function () {
  var a = 'abcd\nefgh\nijkl\nmnop';
  var r =
    'aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp';
  testing(scale(a, 2, 3), r);
  testing(scale('', 5, 5), '');
  testing(scale('Kj\nSH', 1, 2), 'Kj\nKj\nSH\nSH');
});
