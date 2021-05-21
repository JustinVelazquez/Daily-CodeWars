function lastSurvivor(letters, coords) {
  // We take in both our string and our array
  // We want to iterate through our function until there is only one character left
  // We iterate through our  array, find the element and remove the a character from the corresponding index in the string
  // We keep doing this until we are only left with one letter left

  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1);
  }
  return letters.join('');
}
