let input = require("fs").readFileSync("./input.txt").toString().split(" ");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

//0. a은 input[0], b는 input[1]
//1. b가 45보다 작으면 15를 더한값을 b에다가 넣고 a-1은 a에 담는다
//1-1 b가 45보다 작지않으면 b - 45를 b에 담는다.
//2. a가 0보다 작으면 a는 23이다.
//3. a랑 b를 출력한다.

let a = Number(input[0]);
let b = Number(input[1]);

if (b < 45) {
  b = b + 15;
  a = a - 1;
} else {
  b = b - 45;
}

if (a < 0) {
  a = 23;
}

console.log(a, b);
