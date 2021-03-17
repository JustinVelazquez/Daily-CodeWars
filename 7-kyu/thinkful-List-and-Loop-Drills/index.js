function inverseSlice(items, a, b) {
  return items.slice(0, a).concat(items.slice(b));
}

//OR

// function inverseSlice(items,a,b) {
//   return items.filter((x, i) => {
//     return (i < a || i >= b)
//   }
//   )
// }
