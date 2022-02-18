function solution(arr) {
  return arr.reduce((dp, element, idx) => {}, { max: 0, table: [] });
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let length;

rl.on("line", function (line) {
  if (!length) {
    length = parseInt(line);
    return;
  }
  console.log(solution(line.split(" ").map((v) => parseInt(v))));
  rl.close();
}).on("close", function () {
  process.exit();
});
