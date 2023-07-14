// Temperature in Kelvin
const kelvin = 293;
// Temperature in Celsius
const celsius = kelvin - 273;
// Temperature in Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Fahrenheit in Round Number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Temperature in Newton
let newton = celsius * (33 / 100);
// Newton in Round Number
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);