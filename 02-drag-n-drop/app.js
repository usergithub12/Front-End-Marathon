const item = document.querySelector(".item");

item.addEventListener("dragstart", drugstart);
item.addEventListener("dragend", drugend);

function drugstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function drugend(event) {
  event.target.className = "item";
}

const placeholders = document.querySelectorAll(".placeholder");

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
});

function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}
function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
