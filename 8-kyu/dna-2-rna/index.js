DNAtoRNA = (dna) =>
  dna
    .split('')
    .map((i) => (i == 'T' ? (i = 'U') : i))
    .join('');
