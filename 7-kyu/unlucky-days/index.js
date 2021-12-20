function unluckyDays(year) {
  //your code here
  let unlucky = 0;

  for (i = 0; i <= 12; i++) {
    if (new Date(year, i, 13).getDay() == 5) {
      unlucky++;
    }
  }
  return unlucky;
}
