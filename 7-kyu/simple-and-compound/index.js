function interest(P, r, n) {
  return [Math.round(P * (1 + r * n)), Math.round(P * Math.pow(1 + r, n))];
}
