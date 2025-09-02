let numbers = [1, 2, 3];
numbers[2] = 10;
console.log(numbers);

//task2

let strings = ["apple", "banana", "coconut"];
strings.push = "strawberry";
console.log(strings);

//task3

let nums = [5, 10, 20];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

//task4

let array = [2, 4, 9, 29, 37];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//task5

let words = [
  "helloo",
  "goodbay",
  "do not push the horses",
  "balerino capuchino",
  "harry",
  "apple",
];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    console.log(words[i]);
  }
}

//task6
let bignum = [10, 15, 60, 130, 230, 4930, 100, 323, 1345, 45];
let max = bignum[0];
for (let i = 1; i < bignum.length; i++) {
  if (bignum[i] > max) {
    max = bignum[i];
  }
}
console.log(max);
