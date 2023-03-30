const getAge2 = function (birthYear, yearNow) {
  return yearNow - birthYear;
};

const myAge2 = getAge2(1974, 2021);
console.log(myAge2);

const getAge3 = (birthYear, yearNow) => yearNow - birthYear;

const myAge3 = getAge3(1974, 2021);
console.log(myAge3);

const canBuyAlcohol = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  const isPersonOlderThan21 = age >= 21 ? true : false;
  return isPersonOlderThan21;
};

console.log(canBuyAlcohol(1980, 2021));
