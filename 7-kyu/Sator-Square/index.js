
const isSatorSquare = tablet => 
//   //  <----  hajime!
//   // We want to take in our Sator Square
//   // We then want to test if our input is actually a Sator Square
//   // We do this by performing a check on every square of every row
//   // We return a boolean if the our input passes the test
  
  tablet.every((row, y) => 
    row.every((v, x) => 
      tablet[x][y] == v && 
      tablet[row.length - x - 1][tablet.length - y - 1] == v
    )
  );