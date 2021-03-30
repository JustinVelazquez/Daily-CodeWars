function DNAStrand(dna) {
  let newString = '';

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
