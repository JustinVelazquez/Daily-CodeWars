function addUsername(list) {
  // thank you for checking out the Coding Meetup kata :

  // Take in our array of dev objects
  // we create our username property from the specifications
  // we iterate through our array, each time spreading out the object while adding our new property
  // Return our array of developer objects

  let currentYear = new Date().getFullYear();
  return list.map(function (dev) {
    dev.username =
      dev.firstName.toLowerCase() +
      dev.lastName[0].toLowerCase() +
      (currentYear - x.age);
    return dev;
  });
}

addUsername();
