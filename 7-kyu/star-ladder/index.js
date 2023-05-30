// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

// Note: There is no newline in the end (after the pattern ends)
// Examples

// pattern(3) should return "1\n1*2\n1**3", e.g. the following:

// 1
// 1*2
// 1**3

function pattern(n) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      output += +i + '\n';
    } else if (i == n) {
      output += +1 + '*'.repeat(i - 1) + +i;
    } else {
      output += +1 + '*'.repeat(i - 1) + +i + '\n';
    }
  }
  return output;
}
