function City(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;
  this.getPopulation = function () {
    return this.population;
  };
  this.getCityName = function () {
    return this.name;
  };
  this.addCitizen = function () {
    this.population++;
  };
}

let kyiv = new City("Kyiv", 1000, "Ukraine");
kyiv.addCitizen();
kyiv.addCitizen();
kyiv.addCitizen();

console.log(kyiv.getCityName());
console.log(kyiv.getPopulation());
