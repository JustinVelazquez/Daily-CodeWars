function greetDevelopers(list) {
  // thank you for checking out my kata :)
  list.forEach(function (object) {
    object.greeting = `Hi ${object.firstName}, what do you like the most about ${object.language}?`;
  });

  return list;
}
