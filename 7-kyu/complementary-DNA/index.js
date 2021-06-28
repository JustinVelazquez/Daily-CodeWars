function DNAStrand(dna) {
  let newString = '';
  let pushCounter = 0;

  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        newString += 'T';
        break;
      case 'T':
        newString += 'A';
        break;
      case 'C':
        newString += 'G';
        break;
      case 'G':
        newString += 'C';
        break;
      default:
        break;
    }
  }
  return newString;
}
