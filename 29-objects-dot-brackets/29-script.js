myData = [
   'YouRa',
   'Allakhverdov',
   1974,
   'programming instructor',
   ['Irina', 'Michael']
];
console.log(myData[4]);

youraObject = {
   name: 'YouRa',
   lastname: 'Allakhverdov',
   birthYear: 1975,
   job: 'programming instructor',
   familyMembers: ['Irina', 'Michael', 'YouRa']
};

// console.log(youraObject);

console.log(youraObject.name);
console.log(youraObject['name']);

const baseName = 'name';
console.log(youraObject['last' + baseName]);

// const userInput = prompt('What do you want to know about YouRa? Choose between name, lastname, birthYear, job, familyMembers');

// if (youraObject[userInput]) {
//    console.log(youraObject[userInput]);
// } else {
//    console.log('This property does not exist! Choose between name, lastname, birthYear, job, familyMembers');
// }


// Create new properties
youraObject.location = 'Ukraine';
const telega = 'telegram'
youraObject[telega] = '@YouRaAll';
console.log(youraObject);

// Challenge
// 'YouRa has 3 family members and the first one is Irina'

console.log(`${youraObject.name} has ${youraObject.familyMembers.length} family members and the first one is ${youraObject.familyMembers[0]}`);

