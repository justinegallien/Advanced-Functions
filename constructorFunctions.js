"use strict";

function personConstructor(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
const person3 = new personConstructor("Javiah", 117, "javiah@yahoo.com");

console.log(person3);
