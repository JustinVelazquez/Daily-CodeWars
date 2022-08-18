function digitize(n) {
  return n
    .toString()
    .split('')
    .map((letter) => Number(letter))
    .reverse('');
}
