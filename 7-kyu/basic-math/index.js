function calculate(str) {
  let plusRegex = /plus/gi;
  let minusRegex = /minus/gi;

  let addOperators = str.replace(plusRegex, '+').replace(minusRegex, '-');

  return String(eval(addOperators));
}
