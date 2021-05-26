let input = require("fs").readFileSync("./input.txt").toString().split(" ");

// let input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

// for (let a = 1; a <= input[0]; a++) {
//   let number = input[a].split(' ');
//   console.log(Number(number[0]) + Number(number[1]));
// }

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
