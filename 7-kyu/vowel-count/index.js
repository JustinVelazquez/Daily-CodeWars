function getCount(str) {
  let strVowels = str.match(/[aeiou]/gi);

  if (strVowels === null) {
    return 0;
  } else {
    return strVowels.length;
  }
}
