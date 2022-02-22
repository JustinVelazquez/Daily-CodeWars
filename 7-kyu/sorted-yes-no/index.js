function isSortedAndHow(array) {
  switch (JSON.stringify(array)) {
    case JSON.stringify(array.sort((a, b) => a - b)):
      return 'yes, ascending';
    case JSON.stringify(array.sort((a, b) => b - a)):
      return 'yes, descending';
    default:
      return 'no';
  }
}
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
