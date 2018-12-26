class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name; 
    this.age = age; 
  }
  
  getGreeting() {
    return `Hi!! I'm ${this.name}!!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major; 
  }

  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` ${this.name.split(' ')[0]} is majoring in ${this.major}.`
    }

    return description; 
  }
}

class Traveler extends Person {
  constructor(name, age, hometown) {
    super(name, age);
    this.hometown = hometown; 
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hometown) {
      greeting += `I am visiting from ${this.hometown}.`
    }

    return greeting;
  }
}

const me = new Traveler('Drin Kaziu', 36, 'New York');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
 