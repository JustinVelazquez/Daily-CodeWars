function spinningRings(innerMax, outerMax) {
  let moves = 0;
  let inner = 0;
  let outer = 0;

  do {
    inner = inner == 0 ? innerMax : inner - 1;
    outer = outer == outerMax ? 0 : outer + 1;

    moves++;
  } while (inner != outer);

  return moves;
}
