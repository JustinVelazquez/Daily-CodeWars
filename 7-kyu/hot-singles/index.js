// Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
// hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"

function hotSingles(arr, arr2) {
  return [...new Set([...arr1, ...arr2])].filter(
    (val) => !arr1.includes(val) || !arr2.includes(val)
  );
}
