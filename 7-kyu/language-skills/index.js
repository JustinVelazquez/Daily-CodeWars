function myLanguages(results) {
  // console.log(results)
  return Object.keys(results)
    .filter((language) => results[language] >= 60)
    .sort((a, b) => results[b] - results[a]);
}
