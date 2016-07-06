class Person {
  constructor(
    private age?: number,
    private height?: number
  ) {}
}

let addPerson = (people: Person[], person: Person): Person[] => {
  return [
    ...people,
    person,
  ];
};

let removePerson = (people: Person[], person: Person): Person[] => {
  let index = people.indexOf(person);
  return [
    ...people.slice(0, index),
    ...people.slice(index + 1)
  ];
};

let updatePersonAge = (people: Person[], person: Person, age: number): Person[] => {
  let index = people.indexOf(person);
  return [
    ...people.slice(0, index),
    Object.assign({}, person, {age}),
    ...people.slice(index + 1)
  ];
}

let people: Person[] = [
  new Person(30, 165),
  new Person(25, 178)
];

console.log("**** people: initial value ****");
console.log(JSON.stringify(people, null, 2));

let newPerson = new Person(45, 183);
people = addPerson(people, newPerson);

let deletePerson = people[0];
people = removePerson(people, deletePerson);

let updatePerson = people[1];
people = updatePersonAge(people, updatePerson, 19);

console.log("**** people: final value ****");
console.log(JSON.stringify(people, null, 2));

export default people;