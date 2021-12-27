function calc(x) {
  let Sum = (num) => [...num].reduce((a, c) => +a + +c);
  let total1 = x
    .split('')
    .map((el) => el.charCodeAt(0))
    .join('');
  let total2 = total1.replace(/7/g, '1');
  return Sum(total1) - Sum(total2);
}
