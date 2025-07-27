//task 1
let field1 = "Anna";
let field2 = "hello";

if (field1.length > 0 && field2.length > 0) {
  console.log("обидва поля заповнені");
} else {
  console.log("не ісі поля заповнені");
}

//task 2
let num1 = 6;
let num2 = 5;

if (sum > 10) {
  console.log("сума більша за 10");
} else {
  console.log("сума меньше або дорівнює 10");
}

//task 3
let text = "this is JS which is JavaScript which we are learning now";

if (text.includes("JavaScript")) {
  consolele.log("текст містить  слово JavaScript");
} else {
  console.log("текст не містить слово JavaScript");
}

//task 4
let number = 15;
if (number > 10 && number < 20) {
  console.log("число входить у діапазон від 10 до 20");
} else {
  console.log("число не входить у діапазон від 10 до 20");
}

let name = "Anna";
let email = "anna0204@gmail.com";
let password = "secret2";

let nameIsValid = name.length >= 3;
let emailIsValid =
  email.includes("@") && email.indexOf(".") > email.indexOf("@");
let passwordIsValid = password.length >= 6;

if (nameIsValid && emailIsValid && passwordIsValid) {
  console.log("перенаправлення на іншу сторінку");
} else {
  console.log("помилка , неправильне заповнення");
}
