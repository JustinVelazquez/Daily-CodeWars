const orderedCount = function (text) {
  const array = [...new Set([...text])];
  return array.map((el) => [el, [...text].filter((l) => l === el).length]);
};
