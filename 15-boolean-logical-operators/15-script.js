//? AND, OR, NOT

//* AND &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

//* OR ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

//* NOT !
console.log(!true); // false
console.log(!false); // true

//===============================================

const hasMoney = false;
const isAdult = false;

if (hasMoney && isAdult) {
  console.log('You can buy the drink.');
} else {
  console.log('You can not buy the drink.');
}

//===============================================

const hasMoney1 = false;
const isWithParent = false;

if (hasMoney1 || isWithParent) {
  console.log('You can buy the orange.');
} else {
  console.log('You can not buy the orange.');
}

//===============================================

const hasMoney2 = true;
const isAdult2 = true;
const isCompletelyDrunk = true;

console.log(!isAdult2);

if (hasMoney2 && isAdult2 && !isCompletelyDrunk) {
  console.log('You can buy the drink.');
} else {
  console.log('You can not buy the drink.');
}
