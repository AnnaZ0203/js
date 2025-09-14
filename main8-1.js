//task 1

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) string += ", ";
}

console.log(string);

const fruits = ["Mango", "Poly", "Kiwi", "Ajax"];

const strings = fruits.join("");
console.log(string);
//task 2

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

// const remove = "Карточка-1";
// cards.splice(cards.indexOf(remove), 1);
console.log(cards);

//task 3

const cardToInsert = "Карточка-6";
cards.push(cards.indexOf(cardToInsert));

//task 4
const cardToUpdate = "Карточка-2";
const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate != -1) {
  cards.splice(indexToUpdate, 1, "New-Карточка-2");
}

console.log(cards);
