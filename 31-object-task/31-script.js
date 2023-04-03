// Let's go back to the BMI index! This time, we'll use objects to do the calculations!
// BMI = weight / height ** 2 = weight / (height * height) (weight in kg and height in meters)
// Your task:
// We have two friends - Jack and Mike
// 1. For each of them, create an object with properties of its first name, last name, weight and height (Jack White and Mike Black).
// 2. Create a BMI calculation method for each object to calculate BMI (same method for both objects). Store the BMI value in a property and also return it from the method.
// 3. Log into the console who has the higher BMI, also the full name and the corresponding BMI. Example: "Jack White BMI (25.7) is higher than Mike Black (22.4)!"
// Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m.
// Happy coding! 

const jack = {
   firstName: 'Jack',
   lastName: 'White',
   weight: 79,
   height: 1.70,
   calcBmi: function () {
      this.bmi = this.weight / this.height ** 2;
      return this.bmi;
   }
};

const mike = {
   firstName: 'Mike',
   lastName: 'Black',
   weight: 79,
   height: 1.70,
   calcBmi: function () {
      this.bmi = this.weight / this.height ** 2;
      return this.bmi;
   }
};

console.log(jack.calcBmi());
console.log(jack.bmi);

console.log(mike.calcBmi());
console.log(mike.bmi);

// "Jack White BMI (25.7) is higher than Mike Black (22.4)!"

if (jack.bmi > mike.bmi) {
   console.log(`${jack.firstName} ${jack.lastName} BMI (${jack.bmi}) is higher than ${mike.firstName} ${mike.lastName} (${mike.bmi})!`);
} else if (jack.bmi < mike.bmi) {
   console.log(`${mike.firstName} ${mike.lastName} BMI (${mike.bmi}) is higher than ${jack.firstName} ${jack.lastName} (${jack.bmi})!`);
} else {
   console.log(`${mike.firstName} ${mike.lastName} and ${jack.firstName} ${jack.lastName} BMI are equal (${mike.bmi})!`);
}











