let input = require("fs").readFileSync("./input.txt").toString().split(" ");

// let input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

let number = input[0];
let answer = 0;
for (let a = 1; a <= number; a++) {
  answer = answer + a;
}
console.log(answer);
