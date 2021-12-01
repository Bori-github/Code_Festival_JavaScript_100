// 배열의 내장함수
let arr = [200, 100, 300];

let arr1 = arr.slice(0, 2); // [200, 100]
let arr2 = arr.slice(2); // [300]

arr = [...arr1, 1000, ...arr2]; // 전개 구문을 이용해서 배열 합치기

console.log(arr);
