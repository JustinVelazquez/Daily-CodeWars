function correct(string) {
  // your code here
  // were taking in a string of chars which MAY include numbers
  // we can use a swith/case statement to take care of our mistakes
  // returning a proper string
  let splitString = string.split('').map((let) => {
    switch (let) {
      case '5':
        return 'S';
        break;
      case '0':
        return 'O';
        break;
      case '1':
        return 'I';
        break;
      default:
        return let;
        break;
    }
  });
  return splitString.join('');
}
