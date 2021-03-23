function wallpaper(l, w, h) {
  // your code
  if (l === 0 || w === 0) return 'zero';

  const roomArea = 2 * (l + w) * h;
  const rollArea = 0.52 * 10;

  const rollsRequired = Math.ceil((roomArea / rollArea) * 1.15);
  return numbers[rollsRequired];
}
