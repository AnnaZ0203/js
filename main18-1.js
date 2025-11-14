const button = document.getElementById("myButton");
const textField = document.getElementById("textField");

button.addEventListener("click", function () {
  button.textContent = textField.value;
});

const image = document.getElementById("myImage");
image.src = "new.jpg";

const link = document.getElementById("myLink");
const img = document.getElementById("img2");

link.href = "https://new-site.com";
img.alt = "Це опис зображення";

const list = document.getElementById("myList");
list.firstElementChild.textContent = "Новий текст першого елемента";
