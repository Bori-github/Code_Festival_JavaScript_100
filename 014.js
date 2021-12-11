const num = prompt("숫자를 입력해주세요");

function check(num) {
  if (num % 3 === 0) {
    console.log("짝");
  } else {
    console.log(num);
  }
}
console.log(check(num));
