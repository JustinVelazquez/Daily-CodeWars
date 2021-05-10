function differenceInAges(ages){
  
  let maxAge = Math.max(...ages)
  let minAge = Math.min(...ages)
  let ageDiff = maxAge - minAge
  
  return [minAge, maxAge, ageDiff]
}
