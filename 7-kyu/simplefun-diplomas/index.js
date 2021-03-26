const diplomas = (h, w, n) => {
  for (let s = 0; ; s++) {
    let x = Math.floor(s / h),
      y = Math.floor(s / w);
    if (x * y >= n) return s;
  }
};
