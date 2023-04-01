// Tips Calculator Task
// You have to build a tips calculator.
// The calculator should calculate tips in following manner:
// If the bill value is less than 20, tips should be 20%. In other cases tips should be 15%.

// Create an arrow function calculateTips(), that takes a bill parameter and returns the corresponding tips.
// Create an array of bills with test data below.
// Create an array of tips for each bill.
// Create an array of total bills, that is bill + tips.

// Test data: 11, 20, 47.

const calculateTips = bill => (bill < 20 ? bill * 0.2 : bill * 0.15);

const bills = [11, 20, 47];

const tips = [
  calculateTips(bills[0]),
  calculateTips(bills[1]),
  calculateTips(bills[2]),
];

const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totalBills);
