function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata
  // we want to take in our array of devlopers
  // we want to map over our dev's ages adding and then finding the average
  // we then want to return this number

  return Math.round(list.reduce((a, c) => a.age + c.age) / list.length);
}

var list1 = [
  {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python',
  },
];

getAverageAge(list1);
