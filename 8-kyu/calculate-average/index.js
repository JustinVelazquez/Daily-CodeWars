function findAverage(array) {
    // your code here
    if(array.length === 0) {return 0} 
    return array.reduce((a,c) => a + c,0) / array.length
  }