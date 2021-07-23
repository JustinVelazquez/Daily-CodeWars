function dup(s) {
  // we are taking in an array of strings. All lowerCase, no spaces
  // we are the returning the same array back except with duplicate chars in each string removed
  // ["kelless","keenness"])  ==> ["keles","kenes"]

  s.map((word) =>
    word
      .split('')
      .filter((char, index) => char != splitString[index + 1].join(''))
  );
}
