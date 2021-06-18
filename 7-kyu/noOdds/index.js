function noOdds(values) {
  // Return all non-odd values
  let oddArray = [];
  values.forEach((num) => {
    num % 2 === 0 ? oddArray.push(num) : null;
  });
  return oddArray;
}
