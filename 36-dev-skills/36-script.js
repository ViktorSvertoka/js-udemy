'use strict';

// Problem 1
// We work on wheather forecast app, specifically on
// humidity feature for now. The most recent task
// is: "Calculate the humidity amplitude for given array
// of humidities for one day. Note, that sometimes
// there can be an error in data, caused by sensor
// error."

const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];

// 1. Understand the problem
// - What is the humidity amplitude? This is the difference between min and max values of humidity.
// - How to calculate min and max values in array?
// - How sensor error looks like in data array? What to do with this error?

// 2. Divide into sub-problems
// - How to ignore data errors?
// - How to calculate min value in array?
// - How to calculate max value in array?
// - Subtract min from max and return the result

const calculateHumiditiesAmplitude = function (humidities) {
  let max = humidities[0];
  let min = humidities[0];

  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (typeof currentHumidity !== 'number') continue;

    if (currentHumidity > max) {
      max = currentHumidity;
    }
    if (currentHumidity < min) {
      min = currentHumidity;
    }
  }

  console.log(min, max);
  return max - min;
};

const amplitude = calculateHumiditiesAmplitude(humidities);
console.log(amplitude);

// Problem 2
// The function should get two arrays of humidities as parameters

// 1. Understand the problem
// - Shoud we implement the same functionality for second array? No, we should merge two arrays

// 2. Divide into sub-problems
// - How to merge 2 arrays?

const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {
  const humidities = h1.concat(h2);
  console.log(humidities);

  let max = humidities[0];
  let min = humidities[0];

  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (typeof currentHumidity !== 'number') continue;

    if (currentHumidity > max) {
      max = currentHumidity;
    }
    if (currentHumidity < min) {
      min = currentHumidity;
    }
  }

  console.log(min, max);
  return max - min;
};

const amplitude2 = calculateHumiditiesAmplitudeTwoArrays(
  [1, 20, 50],
  [23, 48, 78],
);
console.log(amplitude2);

const celciusToKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Temperature in Celcius: ')),
    value: 35,
  };

  // console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(celciusToKelvin());

// Debugging

// const calculateHumiditiesAmplitudeWithBug = function (h1, h2) {
//   const humidities = h1.concat(h2);
//   console.log(humidities);

//   let max = 0;
//   let min = 0;

//   for (let i = 1; i < humidities.length; i++) {
//     const currentHumidity = humidities[i];
//     if (typeof currentHumidity !== 'number') continue;
//     // debugger;
//     if (currentHumidity > max) {
//       max = currentHumidity;
//     }
//     if (currentHumidity < min) {
//       min = currentHumidity;
//     }
//   }

//   console.log(min, max);
//   return max - min;
// };

// const amplitude = calculateHumiditiesAmplitudeWithBug(
//   [1, 20, 50],
//   [23, 48, 78],
// );
// console.log(amplitude);

// Dev Skills Task

// The weather forecast app displays a string with forecasted humidities from a given array.
// Example
// [49, 51, 63] will display " ... 49% humidity in 1 days ... 51% humidity in 2 days ... 63% humidity in 3 days ..."
// Create  a function printHumiditiesForecast(), which takes an array as a parameter and logs a string like the above to the console. Try it with both test datasets.
// Use the problem-solving framework: understand the problem and divide it into sub-problems!
// Data1: [49, 51, 63]
// Data2: [31, 29, 43, 58, 52]

// 1. Understand the problem
// - An array should be converted into a string, in which array values should be separated by ...
// - What are the days numbers? Array item index plus 1

// 2. Divide into sub-problems
// - Convert the array to string
// - Add % character
// - Add days number (item index + 1)
// - Add ... at the beginning and the end of string and also between forecast values

const data1 = [49, 51, 63];
const data2 = [31, 29, 43, 58, 52];

const printHumiditiesForecast = function (arr) {
  // let str = '... ';
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}% in ${i + 1} days ... `;
  }

  console.log('... ' + str);
};

printHumiditiesForecast(data1);
printHumiditiesForecast(data2);

//----------------------------------------------------------

const tempForDays1 = [22, 67, 98, 55, 45];
const tempForDays2 = [38, 55, 45, 78, 90, 65, 37];

const printFahrenheit = function (array) {
  let string = '';

  for (let i = 0; i < array.length; i++) {
    string += `${array[i]}% in ${i + 1} days ...`;
  }

  console.log('... ' + string);
};

printFahrenheit(tempForDays1);
printFahrenheit(tempForDays2);
