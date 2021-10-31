// temperature in Kelvin
const kelvin = 0;//293;

// convert K to C
const celsius = kelvin-273;

// convert C to F
var fahrenheit = celsius * (9/5) + 32;

// round the F value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperatur is ${newton} degree Newton.`);
