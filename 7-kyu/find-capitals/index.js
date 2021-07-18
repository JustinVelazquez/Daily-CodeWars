var capitals = function (word) {
  // Write your code here
  let letterArray = word.split('');
  let indexArray = [];
  letterArray.map((elem) =>
    elem === elem.toUpperCase() ? indexArray.push(word.indexOf(elem)) : elem
  );
  return indexArray;
};
