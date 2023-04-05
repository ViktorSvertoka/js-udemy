// Let's improve the Tips Calculator from the previous task using loops.
// Your tasks:
// 1. Create the bills array containing all 10 test bill values.
// 2. Create empty arrays for the tips and the totals (tips and totals)
// 3. Use the calculateTips() function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform 10 calculations.
// Test data: 31, 95, 276, 540, 27, 205, 11, 1180, 96, 57.
// Call calculateTips() in the loop and use the push() method to add values to the tips and totals arrays.
// 4. Write a calculateAverage() function that takes an array called arr as a parameter. This function calculates the average of all numbers in a given array. This is a difficult task! Here's how to solve it:
// 4.1. First, you will need to add all the values ​​in the array. To do the addition, start by creating a variable “sum” that starts at 0. Then loop through the array using a for loop. At each iteration, add the current value to the sum variable. Thus, by the end of the loop, all values ​​will be added together.
// 4.2. To calculate the average, divide the sum you calculated earlier by the length of the array (because that's the number of elements).
// 4.3. Call calculateAverage() with totals array.

const calculateTips = bill => (bill < 20 ? bill * 0.2 : bill * 0.15);

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
const tips = [];
const totalBills = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calculateTips(bills[i]);
  tips.push(tip);
  totalBills.push(bills[i] + tip);
}

console.log(bills, tips, totalBills);

const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calculateAverage([1, 2, 3]));
console.log(calculateAverage(totalBills));
console.log(calculateAverage(bills));
console.log(calculateAverage(tips));

//---------------------------------------------------------------------

const calculateSalaryBonus = bonus =>
  bonus < 1000 ? bonus * 0.25 : bonus * 0.5;

const salary = [1000, 2000, 700, 500, 3000, 1500, 650, 880];
const bonuses = [];
const totalSalary = [];

for (let i = 0; i < salary.length; i++) {
  const bonus = calculateSalaryBonus(salary[i]);
  bonuses.push(bonus);
  totalSalary.push(salary[i] + bonus);
}

console.table(salary);
console.table(bonuses);
console.table(totalSalary);

const calculateAverageSum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

console.log(calculateAverageSum([1, 2, 3]));
console.log(calculateAverageSum(salary));
console.log(calculateAverageSum(bonuses));
console.log(calculateAverageSum(totalSalary));
