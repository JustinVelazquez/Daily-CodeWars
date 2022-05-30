function longestConsec(strarr, k) {
  // your code
  let n = strarr.length;
  if ((n = 0 || k > n || k <= 0)) {
    return '';
  }

  let longest = '';

  for (let i = 0; i <= strarr.length; i++) {
    let tempArray = strarr.slice(i, i + k);
    let tempStr = tempArray.join('');
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
