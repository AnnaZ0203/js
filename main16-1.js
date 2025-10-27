// Завдання 1

export function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo);

const Mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango.getInfo();

const Poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
poly.getInfo();

// Завдання 2

export class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
mango.getInfo();

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
poly.getInfo();

// Завдання 3

export class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((el) => el !== item);
  }
}

// Перевірка
const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

console.table(storage.getItems());

storage.addItem("Дроїд");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);

// Завдання 4

export class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);
