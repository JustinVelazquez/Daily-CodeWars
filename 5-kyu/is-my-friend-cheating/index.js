function removeNb(n) {
  let returnArray = [];
  //create sequence of numbers from 1 to n
  let sequence = [];

  for (let i = 1; i <= n; i++) {
    sequence.push(i);
  }

  let sum = sequence.reduce(function (sum, value) {
    return sum + value;
  }, 0);

  for (let k = 0; k < sequence.length; k++) {
    sum -= sequence[k];
    for (let l = 0; l < sequence.length; l++) {
      if (sequence[k] * sequence[l] === sum - sequence[l]) {
        returnArray.push([sequence[k], sequence[l]]);
      }
    }
    //resets sum to sum of sequence array for next loop
    sum = sequence.reduce(function (sum, value) {
      return sum + value;
    }, 0);
  }
  return returnArray;
}
