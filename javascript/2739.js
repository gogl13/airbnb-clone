// const fs = require("fs");
// let stdin = process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2`;

let input = require("fs").readFileSync("./input.txt").toString().split(" ");

let num = Number(input[0]);

for (let a = 1; a <= 9; a++) {
  console.log(`${num} * ${a} = ${num * a}`);
}
