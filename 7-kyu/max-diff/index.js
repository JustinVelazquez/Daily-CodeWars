function maxDiff(list) {
  let sorted = list.sort((a, b) => b - a);
  return Number(sorted.slice(0, 1)) - Number(sorted.slice(-1));
}
