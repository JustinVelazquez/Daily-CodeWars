function solve(arr) {
  return arr.find((num) => !arr.includes(-num));
}
