function accum(s) {
  return [...s]
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // -> "C-Ww-Aaa-Ttt
