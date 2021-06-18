function findSenior(list) {
    // thank you for checking out the Coding Meetup kata :
    let oldestDev = Math.max(...list.map(person => person.age))
    return list.filter(person => person.age === oldestDev)
  }