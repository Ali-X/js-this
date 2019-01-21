"use strict";

function getDoubled() {
  return this.number * 2;
}

function getDoubledTrippled(obj) {
  return getDoubled.call(obj) * 3;
}

let obj = {
  number: 3
};

console.log(getDoubledTrippled(obj));