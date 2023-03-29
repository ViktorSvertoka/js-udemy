const weight = prompt('Enter your weight in kilograms');
const height = prompt('Enter your height in meters');

const bodyMassIndex = weight / Math.pow(height, 2);
const areYouOverweight = bodyMassIndex >= 25;

console.log(bodyMassIndex);
console.log(areYouOverweight);

alert('Are you overweight? ' + areYouOverweight);

//=======================================================

// const yourWeight = prompt('Введите ваш вес');
// const yourHeight = prompt('Введите ваш рост');

// let bodyMassIndex2 = yourWeight / Math.pow(yourHeight, 2);
// let areYouOverweight2 = bodyMassIndex2 >= 25;

// alert('Are you overweight? ' + areYouOverweight2);
