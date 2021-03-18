function countDevelopers(list) {
  // your awesome code here :)
  let count = 0;
  list.forEach((object) =>
    object.continent === 'Europe' && object.language === 'JavaScript'
      ? count++
      : (count += 0)
  );
  return count == 0 ? 0 : count;
}
