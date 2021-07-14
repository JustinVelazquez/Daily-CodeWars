function vertMirror(strng) {
  return strng
    .split('\n')
    .map((subStrng) => subStrng.split('').reverse('').join(''))
    .join('\n');
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}

// console.log(vertMirror('abcd\nefgh\nijkl\nmnop')),
// vertMirror('IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx');
// console.log(horMirror('abcd\nefgh\nijkl\nmnop'));
