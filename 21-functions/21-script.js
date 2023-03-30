//? Don't Repeat Yourself DRY

function printText() {
  console.log('Hello to everyone!');
}

printText();
printText();
printText();

const number = Number('79');
console.log(number);

function colorizer(item, color, colorCode) {
  console.log(item, color);
  const colorizedItem = `The ${item} is ${color}. The code of the color is ${colorCode}.`;
  console.log(colorizedItem);
  return colorizedItem;
}

const messageFromColorizer = colorizer('desk', 'red', 99);
console.log(`We have the following message: ${messageFromColorizer}`);

const messageFromColorizer2 = colorizer('hand', 'green', 10);
console.log(`We have the following message: ${messageFromColorizer2}`);
