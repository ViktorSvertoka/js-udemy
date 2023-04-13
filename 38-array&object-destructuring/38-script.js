'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

//! Destructuring Objects

//! Destructuring Arrays

// const arr = [3, 5, 7];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];

// const [y1, y2, y3] = arr;
// console.log(y1, y2, y3);

// const [a, b, c] = arr;
// console.log(a, b, c);

// console.log(arr);

// let [main, , secondary] = japaneseRestaurant.categories;

// console.log(main, secondary);

//? Swapping variables

// const temp = main;

// main = secondary;

// secondary = temp;

// [secondary, main] = [main, secondary];

// console.log(main, secondary);

japaneseRestaurant.orderFood(2, 1);

console.log(japaneseRestaurant.orderFood(2, 1));

const [appetizers, main] = japaneseRestaurant.orderFood(2, 1);

console.log(appetizers, main);

//? Nested destructuring

const nestedArr = [1, 2, [7, 9]];

// const [f, , d] = nestedArr;

// console.log(f, d);

const [f, , [d, e]] = nestedArr;

console.log(f, d, e);

//? Default value

const unknownArr = [3, 5];

const [g = 0, i = 0, j = 0] = unknownArr;

console.log(g, i, j);
