const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ');

let tmp = 1;
for (let i = n - m + 1; i < n + 1; i++) {
  tmp *= i;
}
for (let i = 2; i < m + 1; i++) {
  tmp /= i;
}
tmp = String(tmp).split('');
console.log(tmp.length - tmp.findLastIndex((e) => e !== '0') - 1);
