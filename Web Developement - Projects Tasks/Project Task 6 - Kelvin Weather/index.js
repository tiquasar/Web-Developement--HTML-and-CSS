const kelvin = prompt('What is the temperature in Kelvins today?');

const celsius = kelvin - 273;


let fahrenheit = celsius * (9 / 5) + 32;
//Calculating Fahrenheit converting celsisus to Fahrenheit & rouding

fahrenheit = Math.floor(fahrenheit);
//Doing this to round the Fahrenheit tempt since its in decimal. 

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
//Basicaly using string interpolation