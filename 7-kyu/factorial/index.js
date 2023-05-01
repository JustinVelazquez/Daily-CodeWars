// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

function factorial(n) {
  // Calculate the factorial here
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

factorial(5);
