function sortVowels(s) {
  //we take in our string
  // we split it into separate characters so we can peform a conditional check
  // If it meets one of our criteria well concat into a new string each seperated by a new line
  // We return our new string
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  if (typeof s === 'string')
    return [...s]
      .map((letter) => (vowels.includes(letter) ? `|${letter}` : `${letter}|`))
      .join('\n');
  return '';
}
