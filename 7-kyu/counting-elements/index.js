function count(array) {
  let namesObject = {};

  array.forEach((name) => {
    namesObject[name] = (namesObject[name] || 0) + 1;
  });
  return namesObject;
}
