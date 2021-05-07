let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./input.txt").toString().split("\n");

let readlineIdx = 0;
const readInput = () => input[readlineIdx++];

function main() {
  let [n, x] = readInput().split(" ");
  let arr = readInput().split(" ");
  console.log(n, x);
  console.log(arr);
}

main();
