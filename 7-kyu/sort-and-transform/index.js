function sortTransform(a){
    let partialArray = (arr) => [...arr.slice(0,2), ...arr.slice(arr.length - 2)].map(num => String.fromCharCode(num)).join('')
    
    let first = partialArray(a)
    let second = partialArray(a.sort((a,b) => a - b))
    let third = partialArray(a.sort((a,b) => b - a))
    
    return `${first}-${second}-${third}-${second}`
  }
  
   
  