function lastManStanding(n) {
  // Good Luck!
  let a = [];

  for (let i = 2; i <= n; i += 2) {
    a.push(i);
  }

  while (true) {
    a = a.reverse().filter((_, index) => index % 2 != 0);
    // console.log(a);
    if (a.length == 1) {
      return a[0];
    }
  }
}
