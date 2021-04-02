function presents(a) {
  let result = [];
  a.forEach((n, i) => {
    result[n - 1] = i + 1;
  });
  return result;
}
