function colorMixer(color1, color2) {
  const newColor = `${color1} + ${color2}`;
  return newColor;
}

function colorizer(item, color1, color2) {
  const color = colorMixer(color1, color2);
  const colorizedItem = `The ${item} is ${color}.`;
  // console.log(colorizedItem);
  return colorizedItem;
}

const colorizedCar = colorizer('car', 'red', 'orange');
console.log(colorizedCar);

console.log(colorizer('house', 'white', 'black'));

//======================================================

//? Sales Departments Task
//* There are two sales departments - Dept 1 and Dept 2.
//* You need to estimate quarter sales.
//* To do this, you need to calculate the average sales per month in quarter for each department.

// Create an arrow function getAverage to calculate the average sales per month in quarter.
// Use the getAverage function to calculate the average for each department.
// Create a function printBonus that takes the average sales of each department as parameters:
// printBonus(dept1AverSales, dept2AverSales).If sales of one department  are at least 30 % higher than sales of another one,
// the function should calculate a bonus for the winner in percentage of that difference and log this to the console.
// For instance, if Dept 1 has 35 % more sales, the function should log the following to the console: ‘Dept 1 will get a bonus of 35 %’.
// Use the printBonus function with two data sets below.

const getAverage = (x, y, z) => (x + y + z) / 3;

console.log(getAverage(1, 2, 3));

// The first quarter

const dept1AverSales1 = getAverage(35467, 29842, 38501);
console.log(dept1AverSales1);

const dept2AverSales1 = getAverage(70533, 50121, 33899);
console.log(dept2AverSales1);

// The second quarter

const dept1AverSales2 = getAverage(50301, 21984, 19207);
console.log(dept1AverSales2);

const dept2AverSales2 = getAverage(72381, 41562, 29465);
console.log(dept2AverSales2);

const printBonus = function (dept1AverSales, dept2AverSales) {
  if (dept1AverSales > dept2AverSales) {
    const diff = dept1AverSales - dept2AverSales;
    const percent = (diff / dept2AverSales) * 100;
    if (percent >= 30) {
      console.log(`Dept 1 will get a bonus of ${percent} %`);
    } else {
      console.log(`No bonus in this quarter`);
    }
  } else if (dept2AverSales > dept1AverSales) {
    const diff = dept2AverSales - dept1AverSales;
    const percent = (diff / dept1AverSales) * 100;
    if (percent >= 30) {
      console.log(`Dept 2 will get a bonus of ${percent} %`);
    } else {
      console.log(`No bonus in this quarter`);
    }
  } else {
    console.log(`No bonus in this quarter`);
  }
};

printBonus(dept1AverSales1, dept2AverSales1);
printBonus(dept1AverSales2, dept2AverSales2);

//================================================================

const printBonus1 = function (dept1AverSales, dept2AverSales) {
  if (
    dept1AverSales > dept2AverSales &&
    dept2AverSales >= 1.3 * dept1AverSales
  ) {
    const diff = dept1AverSales - dept2AverSales;
    const percent = (diff / dept2AverSales) * 100;

    console.log(`Dept 1 will get a bonus of ${percent} %`);
  } else if (
    dept2AverSales > dept1AverSales &&
    dept2AverSales >= 1.3 * dept1AverSales
  ) {
    const diff = dept2AverSales - dept1AverSales;
    const percent = (diff / dept1AverSales) * 100;

    console.log(`Dept 2 will get a bonus of ${percent} %`);
  } else {
    console.log(`No bonus in this quarter`);
  }
};

printBonus1(dept1AverSales1, dept2AverSales1);
printBonus1(dept1AverSales2, dept2AverSales2);
