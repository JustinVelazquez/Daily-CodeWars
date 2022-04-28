function maxMultiple(divisor, bound) {
  for (i = 0; i <= bound; i++) {
    if (i % divisor == 0 && i > 0 && i <= bound) {
      return i;
    }
  }
}
