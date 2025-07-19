//homework 3

//task1
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log("temepature in fahrenheit:", fahrenheit);

//task2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("hours in month:", hoursInMonth);
console.log("minutes in moth:", minutesInMonth);

//task3
let health = 100;
let energy = 70;
health -= 20;
energy -= 30;
console.log("health after attack:", health);
console.log("energy after attack:", energy);

//task4
let totalPrice = 298;
let discount = 0.1;
let discountedPrice = totalPrice * (1 - discount);
console.log(" price with a dicount:", discountedPrice);

//task5
const floatNumber = 12.78;
let roundedNum = Math.floor(floatNumber);
console.log("rounded number:", roundedNum);

//task6
const floatString = 45.67;
let parsedFloat = parseFloat(floatString);
console.log("turned into decimal:", parsedFloat);

//task7
const intString = "123";
let parsedInt = parseInt(intString);
console.log("turned into whole num:", parsedInt);

//task8
let number = 144;
let sqrtNumber = Math.sqrt(number);
console.log("square:", sqrtNumber);

//task9
const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log("line than num:", convertedInt);
console.log("num to line:", convertedString);
