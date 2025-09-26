//task 1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
}
console.log(countItems(numbers, isEven));
console.log(countItems(numbers, isLarge));
console.log(countItems(words, isShort));

//task2
const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "A mistaake , division by 0";
  }
  return a / b;
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));

//task3

function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}

repeatMessage(3, (i) => `Повідомлення №${i + 1}`);
repeatMessage(5, (i) => `Ітерація ${i}`);
repeatMessage(4, (i) => `🔔 Ding-dong ${i}`);

//task4
const movies = [
  "harry pottter",
  "mary the queen",
  "matilda",
  "Dombledores secrets",
];

function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}
//idkk how to do after
