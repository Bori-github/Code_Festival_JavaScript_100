const scores = prompt("시험 점수를 알려주세요").split(" ");

let sum = 0;
for (let i = 0; i < scores.length; i++) {
  let num = parseInt(scores[i], 10);
  sum += num;
}

let result = Math.floor(sum / scores.length);

console.log(result);
