function wordsToMarks(string) {
  //   [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
  return [...string].reduce((a, c) => a + c.charCodeAt() - 96, 0);
}
