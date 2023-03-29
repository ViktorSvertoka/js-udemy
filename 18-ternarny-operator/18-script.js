const money = 50;
const cost = 100;
money >= cost
  ? console.log('You can buy it.')
  : console.log('You can not buy it.');

const canYouBuyIt = money >= cost ? 'You can buy it.' : 'You can not buy it.';
console.log(canYouBuyIt);

let canYouBuyIt1;
if (money >= cost) {
  canYouBuyIt1 = 'You can buy it.';
} else {
  canYouBuyIt1 = 'You can not buy it.';
}

console.log(canYouBuyIt1);

console.log(`You can${money >= cost ? ' ' : ' not '}buy it.`);

//==============================================================

const age = parseInt(prompt('Enter your age'));

const isAdult = 18;

const canYouBayAlcohol =
  isAdult <= age ? 'You can buy alcohol.' : 'You can not buy alcohol.';

alert(canYouBayAlcohol);
