// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  //your code here
  let weights = [0, 0];

  for (let i = 0; i < array.length; i++) {
    i % 2 == 0 ? (weights[0] += array[i]) : (weights[1] += array[i]);
  }
  return weights;
}


rowWeights([4,5,6,3,1,])