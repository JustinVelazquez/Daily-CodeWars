function swap(str) {
  return str
    .split('')
    .map((l) => (l == l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
    .join('');
}
