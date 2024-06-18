const button = document.querySelector("button");
const body = document.querySelector("body");
const lightModeTitle = "Good Morning";
const darkModeTitle = "Good Night";

button.addEventListener("click", function () {
  body.classList.toggle("darkmode");
  button.classList.toggle("darkmode-button");
  if (document.title === lightModeTitle) {
    document.title = darkModeTitle;
  } else {
    document.title = lightModeTitle;
  }
});
