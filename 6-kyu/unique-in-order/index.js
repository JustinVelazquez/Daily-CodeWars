var uniqueInOrder = function (iterable) {
  let arr = [];
  let iterableWord;
  typeof iterable === 'string'
    ? (iterableWord = iterable.split(''))
    : (iterableWord = iterable);
  for (i = 0; i <= iterableWord.length; i++) {
    if (iterableWord[i] !== iterableWord[i + 1]) {
      arr.push(iterableWord[i]);
    }
  }
  return arr;
};
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
