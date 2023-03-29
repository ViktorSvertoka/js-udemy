let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 25;
const greeting = "Hey there!";

// Concatanation

result = firstName + space + lastName;

result = greeting + space + 'My name is' + space + firstName 
+ ' ' + lastName + ". I'm " + age + " years old.";

//Escaping

result = 'I\'m 34 years old';

result = "I like \"Star wars\" movie";


// Properties and methods

result = 'Hello! '.length;
result = firstName.length;

// concat()

result = firstName.concat(' ', lastName);

result = greeting.concat(space, 'My name is ', firstName, space, lastName);

// toUpperCase()

result = result.toUpperCase();
result = result.toLowerCase();

// index
result = firstName[1];

result = 'Hello'.indexOf('l');
result = 'Hello lol'.lastIndexOf('l');
result = firstName.indexOf('a');
result = 'Hello lol'.indexOf('lo');
result = firstName.indexOf('b');


// charAt()
result = firstName.charAt(1);

const longString = 'Hi, I\'m a long string';

result = longString.charAt(longString.length - 1);


// substring()
result = greeting.substring(4,9);

// slice()
result = greeting.slice(4,9);
result = greeting.slice(-6);

// split()
result = longString.split(' ');
const colors = 'red, orange, green, blue';
result = colors.split(',');


//replace()
result = colors.replace('blue', 
'yellow');

// includes()
result = colors.includes('indigo');







console.log(result);