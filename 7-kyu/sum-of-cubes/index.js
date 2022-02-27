function sumCubes(n) {
  let cubedSum = 0;
  for (let i = 1; i <= n; i++) {
    cubedSum += i * i * i;
  }
  return cubedSum;
  // ...
}
