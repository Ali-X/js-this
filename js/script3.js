"use strict";

function Auto(brand, year, mileage, color) {
  this.brand = brand;
  this.year = year;
  this.mileage = mileage;
  this.color = color;
  this.ignited = false;
  this.run = false;
  this.fuel = 0;
  this.isIgnited = function() {
    return this.ignited;
  };
  this.hasFuel = function() {
    return this.fuel !== 0;
  };
  this.addFuel = function() {
    this.fuel = 100;
  };
  this.ignite = function() {
    if (this.hasFuel()) {
      this.ignited = true;
    } else {
      console.log("Hужно заправить автомобиль");
    }
  };
  this.runAuto = function() {
    if (this.isIgnited()) {
      this.run = true;
      console.log("Машина " + this.brand + " марки " + this.color + " цвета поехала!");
    } else {
      console.log("Включите вначале зажигание");
    }
  };
  this.stop = function() {
    if (this.isIgnited()) {
      this.run = false;
      this.ignited = false;
      console.log("Машинка остановилась");
    } else {
      console.log("Зажигание и так выключено");
    }
  };
}

let car1 = new Auto('BMW', 2003, 1000, 'black');
let car2 = new Auto('Nissan', 2010, 500, 'red');

car1.ignite();
car1.addFuel();
car1.runAuto();
car1.ignite();
car1.runAuto();
car1.stop();
car1.stop();