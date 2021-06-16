const board = document.querySelector("#board");
const colors = [
  "#00EAD3",
  "#FFF5B7",
  "#005F99",
  "#FFC93C",
  "#0A1931",
  "#F00000",
];
const SQUARES_NUMBER = 800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}. 0 0 10px ${color}`;
}
function removeColor(event) {
  const element = event.target;
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
