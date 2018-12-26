//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b; 
}
console.log(add(10, 1, 10001));

//this keyword - no longer bound with arrow functions

const user = {
  name: 'Nacho',
  cities: ['New York', 'Baltimore', 'Philadelphia'],
  printPlacesLived() {  
    return this.cities.map(city => this.name + ' has lived in ' + city);
    // this.cities.forEach(city => console.log(this.name + ' has lived in ' + city));
  }
}

console.log(user.printPlacesLived());
// user.printPlacesLived();

//Challange 

const multiplier = {
  numbers: [2, 4, 11, 22, 24],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
}

console.log(multiplier.multiply());