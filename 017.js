const height = prompt("키를 알려주세요!");

function checkHeight(h) {
  if (h >= 150) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

console.log(checkHeight(height));
