//task 1
let drink = "tea";

switch (drink) {
  case "Cofee":
    console.log("you chose cofee");
    break;
  case "tea":
    console.log("you chose tea");
    break;
  case "juice":
    console.log("you chose juice");
    break;
  default:
    console.log("an unknown drink :(");
}

//taask 2
let day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("you need to go to work today, unfortunately");
    break;
  case "Saturday":
  case "Sunday":
    console.log("you have a day of!!!");
    break;
  default:
    console.log("no such a day in a week,typo");
}

//task 3
let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("it is winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("it is spring now");
    break;
  case 6:
  case 7:
  case 8:
    console.log("it is summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("it is autumn");
    break;
  default:
    console.log("wrong number of month");
}

// task 4

let color = "green";

switch (color) {
  case "red":
    console.log("stop");
    break;
  case "green":
    console.log("go");
    break;
  case "orange":
    console.log("wait");
    break;
  default:
    console.log("an unknown color");
}

//task 5
let num1 = 10;
let num2 = 0;
let operator = "/";

switch (operator) {
  case "+":
    console.log(`result : ${num1 + num2}`);
    break;
  case "-":
    console.log(`result : ${num1 - num2}`);
    break;
  case "*":
    console.log(`result : ${num1 * num2}`);
    break;
  case "/":
    if (num2 === 0) {
      console.log("error , can not divide by 0");
    } else {
      console.log(`result : ${num1 / num2}`);
    }
    break;
  default:
    console.log(" an unknown operator");
}
