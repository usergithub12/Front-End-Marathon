const startBtn = document.querySelector("#start");
const board = document.querySelector("#board");
const colors = [
  "#00EAD3",
  "#FFF5B7",
  "#005F99",
  "#FFC93C",
  "#0A1931",
  "#F00000",
];
const screens = document.querySelectorAll(".screen");

let time = 0;

const timeEl = document.querySelector("#time");

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

const timeList = document.querySelector("#time-list");

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

let score = 0;

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});
function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}
function finishGame() {
  board.innerHTML = `<h1>Cчет:<span class="primary"> ${score}</span></h1>`;
  timeEl.parentNode.classList.add("hide");
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  circle.style.background = getRandomColor();
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  board.append(circle);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
