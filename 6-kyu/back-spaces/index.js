function cleanString(s) {
  const result = [];
  for (const c of s) {
    if (c === '#') {
      result.pop();
      //       console.log(result)
    } else {
      result.push(c);
      //       console.log(result)
    }
  }
  return result.join('');
}
