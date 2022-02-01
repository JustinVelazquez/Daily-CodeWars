Array.prototype.numberOfOccurrences = function (num) {
  let sum = 0;
  for (let i = 0; i <= this.length; i++) {
    if (this[i] == num) {
      sum++;
    }
  }
  return sum;
};
