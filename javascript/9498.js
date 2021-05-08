let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
//let input = fs.readFileSync("./1300.js").toString().split("\n");
const a = parseInt(input[0]);

let result;
if (a >= 90) result = "A";
else if (a >= 80) result = "B";
else if (a >= 70) result = "C";
else if (a >= 60) result = "D";
else result = "F";

console.log(result);
