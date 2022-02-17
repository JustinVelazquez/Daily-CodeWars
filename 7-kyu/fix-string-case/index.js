function solve(s) {
  let lowerCase = s.split('').filter((e) => e == e.toLowerCase());
  let upperCase = s.split('').filter((e) => e == e.toUpperCase());

  if (lowerCase.length > upperCase.length) {
    return s
      .split('')
      .map((e) => e.toLowerCase())
      .join('');
  }
  if (upperCase.length > lowerCase.length) {
    return s
      .split('')
      .map((e) => e.toUpperCase())
      .join('');
  } else {
    return s
      .split('')
      .map((e) => e.toLowerCase())
      .join('');
  }
}
