"use strict";

function getName() {
  return this.name;
}

let user = {
  name: "Alina"
};

user.getName = getName;

console.log("Context of object: " + user.getName());
console.log("Global context: " + getName());