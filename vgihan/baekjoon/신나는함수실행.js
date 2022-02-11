const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dp = makeTable();

for (let i = 0; i < input.length - 1; i++) {
  solution(input[i].split(" ").map((v) => parseInt(v)));
}

function solution([a, b, c]) {
  const _a = a < 0 ? 0 : a > 20 ? 20 : a;
  const _b = b < 0 ? 0 : b > 20 ? 20 : b;
  const _c = c < 0 ? 0 : c > 20 ? 20 : c;
  console.log(`w(${a}, ${b}, ${c}) = ${dp[_a][_b][_c]}`);
}

function makeTable() {
  const table = Array.from({ length: 21 }).map((v) =>
    Array.from({ length: 21 }).map((v) => Array.from({ length: 21 }))
  );
  for (let i = 0; i < 21; i++) {
    for (let j = 0; j < 21; j++) {
      for (let k = 0; k < 21; k++) {
        if (i <= 0 || j <= 0 || k <= 0) {
          table[i][j][k] = 1;
          continue;
        }
        if (i < j && j < k) {
          table[i][j][k] =
            table[i][j][k - 1] + table[i][j - 1][k - 1] - table[i][j - 1][k];
          continue;
        }
        table[i][j][k] =
          table[i - 1][j][k] +
          table[i - 1][j - 1][k] +
          table[i - 1][j][k - 1] -
          table[i - 1][j - 1][k - 1];
      }
    }
  }
  return table;
}
