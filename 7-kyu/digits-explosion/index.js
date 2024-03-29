// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// "312" should return "333122"

function explode(s) {
  return s
    .split('')
    .map((num) => num.repeat(+num))
    .join('');
}
