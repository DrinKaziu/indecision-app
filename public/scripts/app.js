'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments)
  return a + b;
};
console.log(add(10, 1, 10001));

//this keyword - no longer bound with arrow functions

var user = {
  name: 'Nacho',
  cities: ['New York', 'Baltimore', 'Philadelphia'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    // this.cities.forEach(city => console.log(this.name + ' has lived in ' + city));
  }
};

console.log(user.printPlacesLived());
// user.printPlacesLived();

//Challange 

var multiplier = {
  numbers: [2, 4, 11, 22, 24],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
