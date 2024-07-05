const body = document.querySelector("body");
const btn = document.querySelector("button");
const main = document.querySelector("main");
let count = 0;

btn.addEventListener("click", function () {
  count = 0;
  main.innerText = count;
  progressColorGradient();
});

main.addEventListener("click", function () {
  countClicks();
  progressColorGradient();
});

window.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key === "Enter") {
    countClicks();
    progressColorGradient();
  }
});

function countClicks() {
  count++;
  main.innerText = count;
}

function progressColorGradient() {
  let color2 = "rgba(33, 33, 33, 1)";
  let color1 = "rgba(11, 115, 105, 1)";
  let gradient = "";
  let part = count % 100;

  gradient =
    "linear-gradient(to right," +
    color1 +
    part +
    "%" +
    "," +
    color2 +
    part +
    "%" +
    ")";

  body.style.background = gradient;
}
