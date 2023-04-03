youraObject = {
  name: 'YouRa',
  lastname: 'Allakhverdov',
  birthYear: 1974,
  job: 'programming instructor',
  familyMembers: ['Irina', 'Michael', 'YouRa'],
  hasDriverLicense: false,
  // calcAge: function (birthYear) {
  //    return 2021 - birthYear;
  // }

  // calcAge: function () {
  //    console.log(this);
  //    return 2021 - this.birthYear;
  // }

  calcAge: function () {
    console.log(this);
    this.age = 2021 - this.birthYear;
    return 2021 - this.birthYear;
  },

  getSummary: function () {
    return `${this.name} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`;
  },
};

console.log(youraObject.calcAge());

console.log(youraObject['calcAge'](1974));

console.log(youraObject.calcAge());
console.log(youraObject.calcAge());
console.log(youraObject.calcAge());
console.log(youraObject.calcAge());

console.log(youraObject.age);
console.log(youraObject.age);
console.log(youraObject.age);

// Challenge

// 'YouRa is a 47-year old programming instructor and he has a/no driver license'

console.log(youraObject.getSummary());
