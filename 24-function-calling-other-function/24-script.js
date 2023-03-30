function colorMixer(color1, color2) {
   const newColor = `${color1} + ${color2}`
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

