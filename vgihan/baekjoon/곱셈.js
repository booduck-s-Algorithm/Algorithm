const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(solution(line.split(" ").map((v) => parseInt(v))));
  rl.close();
}).on("close", function () {
  process.exit();
});

const pow = (a, b, c) => {
  if (b === 0) return 1;
  if (b === 1) return a % c;
  const half = pow(a, Math.floor(b / 2), c) % c;
  if (!b % 2) return (half % c) * (half % c);
  return (((((half % c) * (half % c)) % c) % c) * (a % c)) % c;
};

function solution([a, b, c]) {
  return pow(a, b, c);
}
