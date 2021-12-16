function solve(arr) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map(
    (l) =>
      l
        .toLowerCase()
        .split('')
        .filter((x, i) => i == alphabet.indexOf(x)).length
  );
}

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
