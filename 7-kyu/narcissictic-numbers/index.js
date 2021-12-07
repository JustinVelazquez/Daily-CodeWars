function isNarcissistic(n) {
  //   return true || false ;
  let stringNum = n.toString();
  return (
    stringNum
      .split('')
      .reduce((a, c) => (a += Math.pow(c, stringNum.length)), 0) === n
  );
}
