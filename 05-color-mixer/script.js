const body = document.querySelector("body");
const p = document.querySelector("p");
const slider1 = document.querySelector("#red");
const slider2 = document.querySelector("#green");
const slider3 = document.querySelector("#blue");

slider1.addEventListener("input", function () {
  changeBackground();
});
slider2.addEventListener("input", function () {
  changeBackground();
});
slider3.addEventListener("input", function () {
  changeBackground();
});

function changeBackground() {
  let red = slider1.value;
  let green = slider2.value;
  let blue = slider3.value;
  p.innerText =
    "#" +
    parseInt(red).toString(16) +
    parseInt(green).toString(16) +
    parseInt(blue).toString(16);
  body.style.background = "rgba(" + red + "," + green + "," + blue + ")";
}

changeBackground();
