const body = document.querySelector("body");
const btn = document.querySelector("button");
const main = document.querySelector("main");
let count = 0;

btn.addEventListener("click", function () {
  count = 0;
  main.innerText = count;
});

main.addEventListener("click", function () {
  clickCounter();
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 32 || event.keyCode === 13) {
    clickCounter();
  }
});

function clickCounter() {
  //   let part1 = 100 - count;
  //   let part2 = count;
  //   let gradient =
  //     "rgba (0,0,0,0) linear-gradient(270deg, rgb(33,33,33)" +
  //     part1 +
  //     "%" +
  //     ", rgb(11,115,105)" +
  //     part2 +
  //     "%" +
  //     ") repeat scroll 0% 0% / auto padding-box border-box";
  count++;
  main.innerText = count;
  //   console.log(part1);
  //   console.log(part2);
  //   console.log(gradient);
  // style.background = gradient;
}
