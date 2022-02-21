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
