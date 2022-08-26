function strCount(str, letter) {
  //code here
  let count = 0;
  str.split('').forEach((lem) => (lem === letter ? count++ : (count += 0)));
  return count;
}
