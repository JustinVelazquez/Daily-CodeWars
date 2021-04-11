function palindromePairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        let x = `${arr[i]}${arr[j]}`;
        let y = [...x].reverse().join('');
        if (x === y) pairs.push([i, j]);
      }
    }
  }
  return pairs;
}
