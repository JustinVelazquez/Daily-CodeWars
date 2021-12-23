function pattern(n) {
  let output = [];

  for (let i = 0; i < n; i++) {
    output.push(i.toString().repeat(i));
  }
  return output.join('\n');
}
