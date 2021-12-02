let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
}

// i = 1) a = 10 + 1 = 11
// i = 3) a = 11 + 3 = 14
// i = 5) stop
// a+ b = 14 + 2 = 16

console.log(a + b);
