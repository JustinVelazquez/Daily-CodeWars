function allContinents(list) {
    // thank you for checking out the Coding Meetup kata 
    // first we want to take in our array of dev objects
    // we would create an aarray of the countries to compare our array of objects too
    // we perform a check on our dev objects to see if they include all of our countires
    // we return a boolean value if it passes our test
  
    let countryMap = list.map(country => country.continent)
    return countryMap.includes('Africa' && 'Americas' && 'Oceania' && 'Asia' &&'Europe')
  
  }