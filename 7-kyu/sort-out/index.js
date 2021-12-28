function menFromBoys(arr) {
  let odds = new Set(arr.filter((x) => x % 2 !== 0).sort((a, b) => b - a));
  let evens = new Set(arr.filter((x) => x % 2 == 0).sort((a, b) => a - b));
  return [...evens, ...odds];
}
