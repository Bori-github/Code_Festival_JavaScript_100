// 배열의 내장함수
let arr = [200, 100, 300];

let arr1 = arr.slice(0, 2);
let arr2 = arr.slice(2);

arr = [...arr1, 1000, ...arr2];

console.log(arr);
