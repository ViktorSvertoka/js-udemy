'use strict';

function getAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let info = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(info);

    if (age >= 18) {
      var isAdult = true;
      const firstName = 'John';
      const adult = `${firstName} is adult`;
      console.log(adult);

      function sum(a, b) {
        return a + b;
      }

      console.log(sum(1, 2));

      info = 'New info';
    }
    console.log(isAdult);
    console.log(info);
    console.log(adult);
    console.log(sum(1, 2));
  }
  console.log(info);
  printAge();
  console.log(isAdult);
  console.log(sum(1, 2));

  return age;
}

const firstName = 'YouRa';
getAge(1974);

printAge();

// Hoisting
 
// Variables
console.log(firstName);
console.log(job);
console.log(birthYear);

var firstName = 'YouRa';
let job = 'programmer';
const birthYear = 1974;

// Functions

console.log(declSum(1, 2));
console.log(exprSum(1, 2));
console.log(arrSum);
console.log(arrSum(1, 2));

function declSum(a, b) {
  return a + b;
}

const exprSum = function (a, b) {
  return a + b;
};

var arrSum = (a, b) => a + b;

// Example

console.log(isUserValid);

if (!isUserValid) {
  deleteUser();
}

var isUserValid = true;

function deleteUser() {
  console.log('User is deleted!');
}

var a = 1;
let b = 2;
const c = 3;

console.log(a === window.a);
console.log(b === window.b);
console.log(c === window.c);

this keyword

console.log(this);

const getAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};

getAge(2001);

const getAgeArr = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};

getAgeArr(2001);

const user187 = {
  birthYear: 1974,
  getAge: function () {
    console.log(this);
    console.log(2021 - this.birthYear);
  },
};

user187.getAge();

const user188 = {
  birthYear: 2002,
};

user188.getAge = user187.getAge;
user188.getAge();

const f = user187.getAge;
f();

// Regular VS Arrow Functions

var firstName = 'Jack';

const user187 = {
  firstName: 'YouRa',
  birthYear: 1974,
  getAge: function () {
    console.log(this);
    console.log(2021 - this.birthYear);

    // Old approach before ES6
    const self = this; // self or that
    const isAdult = function () {
      console.log(self);
      console.log(2021 - self.birthYear >= 18);
      console.log(2021 - this.birthYear >= 18);
    };

    // New approach after ES6
    const isAdult = () => {
      console.log(this);
      console.log(2021 - this.birthYear >= 18);
    };

    isAdult();
  },
  sayGreeting: function () {
    console.log(this);
    console.log(`Hello, I'm ${this.firstName}`);
  },
};

user187.sayGreeting();
user187.getAge();
console.log(this.firstName);

// arguments keyword
const exprSum = function (a, b) {
  console.log(arguments);
  return a + b;
};

exprSum(1, 2);
exprSum(1, 2, 3, 9, 34);

var arrSum = (a, b) => {
  console.log(arguments);
  return a + b;
};

arrSum(7, 11, 23);

// Primitives VS Reference Types

let a = 1;
let b = a;
a = 2;
console.log(a);
console.log(b);

const x = {
  foo: 'bar',
  a: 1,
};

const y = x;
y.a = 2;

console.log('Object x: ', x);
console.log('Object y: ', y);

// Primitives
let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'White';
console.log(lastName, oldLastName);

// Objects
const jane = {
  firstName: 'Jane',
  lastName: 'Brown',
  age: 21,
};

const marriedJane = jane;
marriedJane.lastName = 'White';
console.log('Jane: ', jane);
console.log('Married Jane: ', marriedJane);
marriedJane = {};

// Objects copying

const sara = {
  firstName: 'Sara',
  lastName: 'Brown',
  age: 25,
  familyMembers: ['Jack', 'Bob', 'Greta'],
};

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = 'White';
saraCopy.familyMembers.push('Bill', 'Marta');

console.log('Sara: ', sara);
console.log('Married Sara: ', saraCopy);
