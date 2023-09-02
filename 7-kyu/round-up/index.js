// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5

function roundToNext5(n) {
  // ...

  return Math.ceil(n / 5) * 5;
}
