// Sum Numbers
function sum(numbers) {
  'use strict';

  return numbers.length === 0 ? 0 : numbers.reduce((a, c) => a + c, 0);
}
