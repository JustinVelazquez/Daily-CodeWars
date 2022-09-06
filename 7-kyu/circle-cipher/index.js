function encode(s) {
  const out = [];
  for (let i = 0, j = s.length; i < j; i++) {
    out.push(s[i]);
    if (--j > i) out.push(s[j]);
  }
  return out.join('');
}

function decode(s) {
  const right = [],
    rev = [];
  for (let i = 0; i < s.length; i++) {
    (i % 2 ? rev : right).push(s[i]);
  }
  return right.concat(rev.reverse()).join('');
}
