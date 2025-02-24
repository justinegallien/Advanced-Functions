"use strict";

function personCreation(name, age, email) {
  const person = {
    name: name,
    age,
    email,
  };
  return person;
}

const person1 = personCreation("Unique", 11, "unique@yahoo.com");
const person2 = personCreation("Star", 20, "star@gmail.com");

console.log(person1);
console.log(person2);
