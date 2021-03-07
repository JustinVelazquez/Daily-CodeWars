function i(word) {
  //we take in a word that is just a string
  // We want to append an 'i' character to begininig of our word
  // But only if it does not meet any of the criterias
  // We return  said word

  let vowelCount = word.replace(/[aeiou]/gi, '').length;
  console.log(vowelCount);
  if (
    word === '' ||
    word[0].toLowerCase() === 'i' ||
    word[0] === word[0].toLowerCase()
  )
    return 'Invalid word';
  if (vowelCount <= word.length - vowelCount) return 'Invalid word';
  return `i${word}`;
}
