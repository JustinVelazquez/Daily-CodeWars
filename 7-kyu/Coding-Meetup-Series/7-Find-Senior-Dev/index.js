function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :
  let oldestDev = Math.max(...list.map((person) => person.age));
  console.log(oldestDev);
  console.log('hello world');
  console.log(list.filter((person) => person.age === oldestDev));
}
var list1 = [
  {
    firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 49,
    language: 'PHP',
  },
  {
    firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 38,
    language: 'Python',
  },
  {
    firstName: 'Emilija',
    lastName: 'S.',
    country: 'Lithuania',
    continent: 'Europe',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP',
  },
];

findSenior(list1);
