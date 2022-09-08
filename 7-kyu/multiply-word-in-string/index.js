function modifyMultiply(str, loc, num) {
  //Code here

  return Array(num).fill(str.split(' ')[loc]).join('-');
}
