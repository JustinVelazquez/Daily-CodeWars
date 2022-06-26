function to_nato(words) {
  let arr = NATO;
  return words
    .toLowerCase()
    .split('')
    .map((letter) => arr[letter])
    .filter((x) => x !== undefined)
    .join(' ');
  //   return words.replace(/ /g,'').toLowerCase().split('').map(x=>NATO[x] || x).join(' ')
}
