// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'

function switcheroo(x) {
  // const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');
  return x
    .split('')
    .map((letter) => (letter == 'a' ? 'b' : letter === 'b' ? 'a' : 'c'))
    .join('');
}
