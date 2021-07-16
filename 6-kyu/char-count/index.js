function count(string) {
  // The function code should be here
  //   if string.length === 0 return {}

  let charMap = {};
  for (let char of string) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}
