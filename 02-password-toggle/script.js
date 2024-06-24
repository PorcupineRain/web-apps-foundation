const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  if (input.type === "text") {
    input.type = "password";
    button.innerText = "Show Password";
  } else {
    input.type = "text";
    button.innerText = "Hide Password";
  }
});
