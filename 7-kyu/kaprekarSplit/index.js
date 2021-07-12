function kaprekarSplit(n) {
  //We taking in a number. No negatives, no floats. Just intergers.
  // We want to return the index number of where we need to split our interger so it is a Kaperkar Split Interger
  // If it doesnt pass we return ----> -1
  // if our arugument is 1 we return  ----> 0

  //Examples
  // 45  -> 2
  // 2223 => 3
  // 5051 => -1

  if (n === 1) return 0;
  let numString = (n ** 2).toString();
  for (let i = 0; i < numString.length; i++)
    if (
      parseInt(numString.substring(0, i)) +
        parseInt(numString.substring(i, numString.length)) ===
      n
    )
      return i;
  return -1;
}
