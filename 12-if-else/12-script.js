const age = 17;
const isAdult = age >= 16;

if (isAdult) {
  console.log('You can watch this video');
}

//====================================================

const age1 = 16;

if (age1 >= 18) {
  console.log('You can watch this video');
} else {
  console.log('You can not watch this video');
  const yearsLeft = 18 - age1;
  console.log(
    `You are too young. You can watch this video ${yearsLeft} years later`,
  );
}

//====================================================

const birthYear = 2010;
const yearNow = 2020;
const age2 = yearNow - birthYear;

let answer;

if (age2 >= 16) {
  answer = 'Yes';
} else {
  answer = 'No';
}

console.log(`Am I adult? - ${answer}`);

//====================================================

const color = 'orange';

if (color === 'green') {
  console.log('Go!');
} else if (color === 'yellow') {
  console.log('Get ready!');
} else if (color === 'red') {
  console.log('Stop!');
} else {
  console.log('Incorrect color!');
}
