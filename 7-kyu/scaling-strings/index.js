function scale(strng, k, n) {
  // Take in our string and split it. nooo
  // for each substring we get, we can iterate through each subsection and perofrm the operations
  // if we get a empty string we return an empty string

  return strng
    .split('\n')
    .map((el) =>
      el
        .split('')
        .map((el) => el.repeat(k))
        .join('')
    )
    .map((el) => `${el}\n`.repeat(n))
    .join('')
    .trim();
}
