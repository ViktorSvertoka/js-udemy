'use strict';
///////////////////////////////////////////////////////////////
// Default Parameters

// const bookings = [];

// const makeBooking = function (
//   flightNum,
//   passengersNum = 1,
//   price = 99 * passengersNum
// ) {
//   // Before ES6
//   // passengersNum = passengersNum || 1;
//   // price = price || 99;

//   const booking = {
//     flightNum,
//     passengersNum,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// makeBooking('QE123');
// makeBooking('TU235', 3, 390);
// makeBooking('QE123', 1);
// makeBooking('QE123', 4);
// makeBooking('QE123', undefined, 400);

///////////////////////////////////////////////////////////////
// Passing arguments. Values vs Reference

// const flightNumber = 'BV328';
// const passenger1145 = {
//   firstName: 'Jack',
//   lastName: 'Brown',
//   passport: 128490,
// };

// const checkIn = function (flight, passenger) {
//   flight = 'bv328';
//   passenger.firstName = passenger.firstName.toLowerCase();
//   passenger.lastName = passenger.lastName.toLowerCase();

//   if (passenger.passport === 128490) {
//     alert('Welcome to the board!');
//   } else {
//     alert('Incorrect passport!');
//   }
// };

// checkIn(flightNumber, passenger1145);
// console.log(flightNumber);
// console.log(passenger1145);

// // This is the same as doing it
// const flight = flightNumber;
// const passenger = passenger1145;

// const changePassportNumber = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// changePassportNumber(passenger1145);
// checkIn(flightNumber, passenger1145);

///////////////////////////////////////////////////////////////
// Функции Принимающие Callback Функции

// const removeSpaces = function (text) {
//   return text.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (text) {
//   const [first, ...others] = text.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order Function
// const converter = function (str, func) {
//   console.log(`The original text: ${str}`);
//   console.log(`The converted text: ${func(str)}`);

//   console.log(`Converted by: ${func.name}`);
// };

// converter('Hello to everyone!', upperFirstWord);
// converter('Hello to everyone!', removeSpaces);

// // Callback functions are very common in JS
// const twice = num => console.log(num * 2);
// [1, 2, 3].forEach(twice);

///////////////////////////////////////////////////////////////
// Функции Возвращающие Функции

const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText} ${name}!`);
  };
};

const hi = greet('Hi');
hi('Mam');
hi('Dad');
hi('Son');

greet('Hey')('Lilu');

//-----------------------------------------------------------------

const greatOne = greetingTexts => {
  return name => {
    console.log(`${greetingTexts} ${name}!`);
  };
};

const hii = greatOne('Hi');
hii('Jack');
hii('Diana');
hii('Mick');

greatOne('Bye')('Stan');

//-------------------------------------------------------------------

const greet3 = greetingText => name => {
  console.log(`${greetingText} ${name}!`);
};

const hi3 = greet3('Hi');
hi3('Mamy');
hi3('Dady');
hi3('Sony');

greet3('Hey')('Liluuuu');
// // greet() =>
// const arrGreet = greetingText => name =>
//   console.log(`${greetingText} ${name}!`);

// arrGreet('Hello')('Lilu');

///////////////////////////////////////////////////////////////
// Методы call(), apply(), bind()

// const book = function (flightNumber, passengerName) {
//   console.log(
//     `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
//   );
//   this.bookings.push({
//     flight: `${this.iataCode}${flightNumber}`,
//     passengerName,
//   });
// };

// const airline1 = {
//   airlineName: 'SkyUp',
//   iataCode: 'SU',
//   bookings: [],
//   book(flightNumber, passengerName) {
//     console.log(
//       `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNumber}`,
//       passengerName,
//     });
//   },
// };

// // airline1.book(346, 'Jim Green');
// // airline1.book(635, 'Michael Jordan');
// // console.log(airline1);

// const airline2 = {
//   airlineName: 'EuroFlights',
//   iataCode: 'EF',
//   bookings: [],
// };

// const book = airline1.book;

// // This doesn't work
// // book(345, 'Linda Wilams');

// // call()
// book.call(airline2, 345, 'Linda Wilams');
// console.log(airline2);

// // book.call(airline1, 111, 'Bob Smith');
// // console.log(airline1);

// // // apply() - old approach
// // const flightData = [111, 'Nick Wong'];
// // // book.apply(airline2, flightData);

// // book.call(airline2, ...flightData);
// // console.log(airline2);

// // Метод bind()
// const bookAirline2 = book.bind(airline2);
// bookAirline2(45, 'John Doe');
// console.log(airline2);

// const airline3 = {
//   airlineName: 'USFlights',
//   iataCode: 'USF',
//   bookings: [],
// };

// const bookAirline3 = book.bind(airline3);
// bookAirline3(11, 'Marta Jonson');
// console.log(airline3);

// const bookAirline3Flight21 = book.bind(airline3, 21);
// bookAirline3Flight21('Jack Smith');
// bookAirline3Flight21('Lana Del Ray');

// // bind() with event listeners
// airline1.airplanes = 200;
// airline1.purchaseAirplane = function () {
//   console.log(this);
//   this.airplanes++;
//   console.log(this.airplanes);
// };

// // airline1.purchaseAirplane();

// document
//   .querySelector('#purchase')
//   .addEventListener('click', airline1.purchaseAirplane.bind(airline1));

// // Partial application
// const getPercentage = (totalValue, value) => (value / totalValue) * 100;
// console.log(getPercentage(20, 23789));
// const getPercentage23789 = getPercentage.bind(null, 23789);
// console.log(getPercentage23789(10000));

///////////////////////////////////////////////////////////////
// Task 1

// Let's create a simple survey application!
// A survey has a question, a set of options that users can choose from, and an array with the number of responses for each option. This data is stored in the survey object, which you can see below.

// 1. Create a method called logNewAnswer for the survey object. The method should perform 2 functions:
// a) Display a prompt window so that the user can enter the number of the selected option. The text in the prompt should look like this:
// What programming language would you like to learn?
// 0: JavaScript
// 1: Python
// 2: Ruby
// 3: Java
// 4: C#
// (Enter option number)

// b) Update the answers property based on the number entered. For example, if option 2 is selected, increase the value in the second element of the array answers by 1. Make sure that you entered a number and that it makes sense (for example, the answer 23 does not make sense, right?)
// 2. Call this method when users click the Take Survey button. Create this button in the index.html file as we created the Purchase Airplane button earlier.
// 3. Create a printResults method that prints the survey results to the console. The method takes as input a string (the type parameter), which can be either “string” or “array”. If the type is “array”, just display the answers array as it is using console.log(). This should be the default. If the type is “string”, display a string like this: “Survey results: 7, 5, 3, 2, 6.”
// 4. Метод printResults должен запускаться для каждого вызова метода logNewAnswer
// 5. Use the printResults method to display 2 arrays from test data. Use both "string" and "array" options. Don't put arrays in the survey object! So what should this keyword look like in this situation?

// Test Data:
// [7, 1, 4]
// [3, 6, 9, 2, 5, 4, 4]

// What programming language would you like to learn?
// 0: JavaScript
// 1: Python
// 2: Ruby
// 3: Java
// 4: C#
// (Enter option number)

// const survey = {
//   question: 'What programming language would you like to learn?',
//   options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
//   answers: new Array(5).fill(0),
//   logNewAnswer() {
//     //Display a prompt
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Enter option number)`
//       )
//     );
//     // console.log(answer);

//     //Update answers
//     if (
//       typeof answer === 'number' &&
//       answer >= 0 &&
//       answer < this.answers.length
//     ) {
//       this.answers[answer]++;
//     }
//     // console.log(this.answers);
//     this.printResults();
//     this.printResults('array');
//     this.printResults('string');
//   },
//   printResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Survey results: ${this.answers.join(', ')}.`);
//     }
//   },
// };

// // survey.logNewAnswer();
// // survey.printResults('string');

// document
//   .querySelector('#survey')
//   .addEventListener('click', survey.logNewAnswer.bind(survey));

// survey.printResults.call({ answers: [7, 1, 4] }, 'array');
// survey.printResults.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, 'string');

// // Test Data:
// // [7, 1, 4]
// // [3, 6, 9, 2, 5, 4, 4]

///////////////////////////////////////////////////////////////
// Immediately Invoked Function Expression (IIFE)

// const runOneTime = function () {
//   console.log('You will never see this function call again.');
// };
// // runOneTime();
// // runOneTime();

// (function () {
//   console.log('You will never see this function call again.');
//   const x = 1;
//   var z = 3;
// })();

// (() => console.log('You will never see this ARROW function call again.'))();

// {
//   // const x = 1;
//   var y = 2;
// }

// console.log(z);

///////////////////////////////////////////////////////////////
// Замыкания (Closures)

// const safeBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = safeBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

///////////////////////////////////////////////////////////////
// Больше Примеров О Closures

// Example 1

// let f1;

// const f2 = function () {
//   const x = 11;
//   f1 = function () {
//     console.log(x ** 2);
//   };
// };

// const f3 = function () {
//   const y = 12;
//   f1 = function () {
//     console.log(y ** 2);
//   };
// };

// f2();
// f1();
// console.dir(f1);

// f3();
// f1();
// console.dir(f1);

// Example 2

// const boardPassengers = function (passengerNumber, secondsBeforeBoarding) {
//   const passengersInGroup = passengerNumber / 2;

//   setTimeout(function () {
//     console.log(`All ${passengerNumber} passengers are now boarding`);
//     console.log(`Each group contains ${passengersInGroup} passengers`);
//   }, secondsBeforeBoarding * 1000);

//   console.log(`The boarding will start in ${secondsBeforeBoarding} seconds`);
// };

// const passengersInGroup = 1500;
// boardPassengers(150, 5);

///////////////////////////////////////////////////////////////
// Task 2
// 1. В конце функции IIFE ниже прикрепите обработчик события, который меняет цвет выбранного элемента h2 на зелёный при каждом клике на элементе body. Не выбирайте элемент h2 снова!
// 2. А теперь объясните себе (или кому-нибудь поблизости), почему это сработало? Не торопитесь. Подумайте, когда именно выполняется callback функция и что это означает для переменных, задействованных в этом примере.

// (function () {
//   const h2 = document.querySelector('h2');
//   h2.style.color = 'orange';

//   document.querySelector('body').addEventListener('click', function () {
//     h2.style.color = 'green';
//   });
// })();

// document.querySelector('section').addEventListener('click', () => {
//   alert('You have clicked me!');
// });
