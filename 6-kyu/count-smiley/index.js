function countSmileys(arr) {
  let smileys = 0;
  let validSmileys = [
    ':D',
    ';D',
    ':)',
    ';)',
    ':-D',
    ';-D',
    ':-)',
    ';-)',
    ':~D',
    ';~D',
    ':~)',
    ';~)',
  ];
  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      smileys++;
    }
  }
  return smileys;
}
