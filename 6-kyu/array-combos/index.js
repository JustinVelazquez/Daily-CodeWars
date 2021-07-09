const solve = (a) => a.map((v) => new Set(v).size).reduce((v, w) => v * w, 1);

// const solve = (arr) => arr.reduce((res, a) => res * new Set(a).size, 1);

// function solve(arr) {
//       return new Set(curr).size * acc;
//     }, 1);
//   };

function solve(arr) {
  const setArr = arr.map((arr) => Array.from(new Set(arr)));
  return setArr.reduce((count, arr) => count * arr.length, 1);
}
