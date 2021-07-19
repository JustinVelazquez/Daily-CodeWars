function high(x) {
  // we take in our string. all lowercase.
  // we want to return the word(string) which has the highest score
  // we can split into differnt substrings, loop through and keep a score of  each
  // we then return that word

  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  console.log(arr);
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function (word) {
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  console.log(newArr);
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}

high('man i need a taxi up to ubud');
