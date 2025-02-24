"use strict";

function buildAnAnimal(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
const animal1 = new buildAnAnimal("bear", "5", "boy");

buildAnAnimal.prototype.Sounds = function () {
  console.log(this.name + "growls");
};
