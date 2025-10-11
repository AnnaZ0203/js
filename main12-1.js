//task1

const user = {
  name: "Mango",
  age: 20,
  hobby: "sleeep",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

//task2

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//task3

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

console.log(
  findBestEmployee({
    Ann: 29,
    David: 35,
    Helen: 1,
    Lorence: 99,
  })
);

//task4

function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

console.log(
  countTotalSalary({
    Mango: 100,
    Poly: 150,
    Alis: 80,
  })
);

//task5

function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));

//task6
function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
    }
  }

  return total;
}

console.log(calculateTotalPrice(products, "Radar"));
console.log(calculateTotalPrice(products, "Grip"));
