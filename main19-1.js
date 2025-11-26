const radios = document.querySelectorAll('input[name="color"]');

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    document.body.style.backgroundColor = radio.value;
  });
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent =
    nameInput.value.trim() === "" ? "незнайомець" : nameInput.value;
});

const validationInput = document.querySelector("#validation-input");
const requiredLength = Number(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = sizeControl.value + "px";

sizeControl.addEventListener("input", () => {
  text.style.fontSize = sizeControl.value + "px";
});
