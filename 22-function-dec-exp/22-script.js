const myAge1 = getAge1(1974, 2021);
console.log(myAge1);

function getAge1(birthYear, yearNow) {
  // const age = yearNow - birthYear;
  // return age;
  return yearNow - birthYear;
}

// const myAge1 = getAge1(1974, 2021);
// console.log(myAge1);

//==========================================

// const myAge2 = getAge2(1974, 2021);
// console.log(myAge2);

const getAge2 = function (birthYear, yearNow) {
  return yearNow - birthYear;
};

const myAge2 = getAge2(1974, 2021);
console.log(myAge2);
