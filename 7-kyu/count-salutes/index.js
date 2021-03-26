function countSalutes(hallway) {
  let right = 0;
  let salutes = 0;

  for (i = 0; i < hallway.length; i++) {
    if (hallway[i] === '>') {
      right += 1;
    } else if (hallway[i] === '<') {
      salutes += 2 * right;
    }
  }
  return salutes;
}
