class Person {
  constructor(
    public age?: number,
    public height?: number
  ) {}
}

let addPerson = (person: Person): void => {
  people.push(person);
};

let removePerson = (person: Person): void => {
  let index = people.indexOf(person);
  people.splice(index, 1);
};

let updatePersonAge = (person: Person, age: number): void => {
  person.age = age;
}

let people: Person[] = [
  new Person(30, 165),
  new Person(25, 178)
];

console.log("**** people: initial value ****");
console.log(JSON.stringify(people, null, 2));

let newPerson = new Person(45, 183);
addPerson(newPerson);

let deletePerson = people[0];
removePerson(deletePerson);

let updatePerson = people[1];
updatePersonAge(updatePerson, 19);

console.log("**** people: final value ****");
console.log(JSON.stringify(people, null, 2));

export default people;
