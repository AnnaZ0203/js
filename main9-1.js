//task1

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

const logItems = ["Mango", "Poly", "Ajax"];

//task 2

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split("");
  return words.length * pricePerWord;
}
console.log(calculateEngravingPrice("JavaScript is scaaaryyy"));

//task3

function findLongestWord(string) {
  const words = string.split("");
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
// task 4

function formatString(string) {
  return string.length <= 40 ? string : string.slice(0, 40) + "..";
}

//task 5

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

//task 6

let input;
const numbers = [];
let total = 0;
//idkkkkkkk how to do thaat one
