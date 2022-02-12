function reverseLetter(str) {
  //coding and coding..

  return str
    .replace(/[^a-z]/gi, '')
    .split('')
    .reverse()
    .join('');
}

//   Task

// Given a string str, reverse it omitting all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
