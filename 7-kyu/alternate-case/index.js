function alternateCase(s) {
  return s
    .split('')
    .map(function (el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    })
    .join('');
}
