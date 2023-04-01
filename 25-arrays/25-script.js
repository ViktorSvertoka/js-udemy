const color1 = 'red';
const color2 = 'orange';
const color3 = 'yellow';
const color4 = 'green';
const color5 = 'blue';
const color6 = 'indigo';
const color7 = 'violet';

const rainbowColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

console.log(rainbowColors[1]);
console.log('The sky is ' + rainbowColors[4]);

rainbowColors[5] = 'dark blue';
rainbowColors[rainbowColors.length] = 'indigo';

console.log(rainbowColors);

// const stringNumbers = [];
// stringNumbers[0] = 'one';
// stringNumbers[1] = 'two';
// stringNumbers[2] = 'three';

const stringNumbers = new Array('one', 'two', 'three');

console.log(stringNumbers);

const numbers = [34, 5, 32, 67];
console.log(numbers);

const anyItems = [4, true, new Date(), 'something'];

console.log(anyItems);
