let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//let input = fs.readFileSync("./1300.js").toString().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a < b) {
  console.log("<");
} else if (a > b) {
  console.log(">");
} else {
  console.log("==");
}
