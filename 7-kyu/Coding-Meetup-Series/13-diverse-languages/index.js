function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata
  // we take in our array of dev objects
  // map over the languages and get an accurate count of each
  // We test to see if the lanaguges match our conditions
  // Return a boolean value
  let languageMap = list.reduce((allLanguages, current) => {
    if (allLanguages[current.language]) {
      allLanguages[current.language]++;
    } else {
      allLanguages[current.language] = 1;
    }
    return allLanguages;
  }, {});
  const newList = Object.entries(languageMap).sort((a, b) => b[1] - a[1]);
  return newList[0][1] / newList[newList.length - 1][1] <= 2 ? true : false;
}
