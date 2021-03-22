function nbDig(n, d) {
  let digits = '';
  for (let i = 0; i <= n; i++) {
    digits += Math.pow(i, 2);
  }

  return digits.split(d).length - 1;
}
