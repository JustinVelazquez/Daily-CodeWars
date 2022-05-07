function isValidWalk(walk) {
  let points = { n: 0, s: 0, e: 0, w: 0 };

  walk.forEach((point) => points[point]++);
  return (
    walk.length === 10 &&
    !(points['n'] - points['s'] + points['e'] - points['w'])
  );
}
