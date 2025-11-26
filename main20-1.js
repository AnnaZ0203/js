const gallery = document.querySelector(".gallery");

document.addEventListener("keydown", (event) => {
  const scrollAmount = 350; // на скільки пікселів рухається галерея

  if (event.key === "ArrowRight") {
    gallery.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  if (event.key === "ArrowLeft") {
    gallery.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
});

const input = document.querySelector("#controls input");
const btnCreate = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.margin = "5px";
    div.style.backgroundColor = getRandomColor();

    size += 10;
    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
