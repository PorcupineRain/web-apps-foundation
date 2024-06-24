const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

// let count = 0;
// let lastChecked;
// fast.addEventListener("click", function () {
//   if (fast.checked === true) {
//     if (count >= 2) {
//       lastChecked.click();
//     }
//     count += 1;
//     lastChecked = fast;
//   } else {
//     count -= 1;
//   }
//   console.log(count);
// });
// cheap.addEventListener("click", function () {
//   if (cheap.checked === true) {
//     if (count >= 2) {
//       lastChecked.click();
//     }
//     count += 1;
//     lastChecked = cheap;
//   } else {
//     count -= 1;
//   }
//   console.log(count);
// });
// good.addEventListener("click", function () {
//   if (good.checked === true) {
//     if (count >= 2) {
//       lastChecked.click();
//     }
//     count += 1;
//     lastChecked = good;
//   } else {
//     count -= 1;
//   }
//   console.log(count);
// });

let count = 0;
let lastChecked;
fast.addEventListener("click", function () {
  checker(fast);
});
cheap.addEventListener("click", function () {
  checker(cheap);
});
good.addEventListener("click", function () {
  checker(good);
});

function checker(checkbox) {
  if (checkbox.checked === true) {
    if (count >= 2) {
      lastChecked.click();
    }
    count += 1;
    lastChecked = checkbox;
  } else {
    count -= 1;
  }
  console.log(count);
}
