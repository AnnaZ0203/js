const bankAccount = {
  ownerName: "Аня",
  accountNumber: "UA123356709",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    alert(`Ви поповнили рахунок на ${amount} грн залишок: ${this.balance} грн`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів на рахунку");
    } else {
      this.balance -= amount;
      alert(` Ви зняли ${amount} грн залишок: ${this.balance} грн`);
    }
  },
};

if (confirm("Хочете поповнити рахунок?")) {
  const sum = parseFloat(prompt("Введіть суму поповнення пліз"));
  bankAccount.deposit(sum);
} else if (confirm("Хочете зняти грошенята?")) {
  const sum = parseFloat(prompt("Введіть суму зняття!!!"));
  bankAccount.withdraw(sum);
}

//task 2

const weather = {
  temperature: 0,
  humidity: 60,
  windSpeed: 5,

  isFreezing() {
    return this.temperature < 0;
  },
};

weather.temperature = parseFloat(prompt("Введіть температуру:"));

if (weather.isFreezing()) {
  alert("Температура нижче 0 градусів");
} else {
  alert("Температура вище або = 0 градусів");
}

//task3

const user = {
  name: "Anna",
  email: "anna@gmail.com",
  password: "12345",

  login(inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      alert(`Ласкаво просимо, ${this.name}!`);
    } else {
      alert("нічого не правильно! email або пароль перевірте!");
    }
  },
};

const emailInput = prompt("Введіть email:");
const passInput = prompt("Введіть пароль:");
user.login(emailInput, passInput);

//task 4

const movie = {
  title: "Intestellar",
  director: "Christofer NOlan",
  year: 2014,
  rating: 8.6,

  isTopRated() {
    return this.rating > 8;
  },
};

console.log("film", movie.title);
console.log("director", movie.director);
console.log("year", movie.year);
console.log("rating", movie.rating);

if (movie.isTopRated()) {
  console.log("Це топовий фільм!");
} else {
  console.log("Звичайний фільм.");
}
