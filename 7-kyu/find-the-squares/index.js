const findSquares = num => {
    //     return `${max}-${min}`
      
      // We take in a odd integer
      // we want to find the 2 perfect squeres whose difference is equal to our input
      // We want to then sort into desc order
      // and return a string of our 2 perfect squares
      let max = Math.ceil(num/2);
      let min = Math.floor(num/2);
      return `${Math.pow(max,2)}-${Math.pow(min,2)}`;
    };