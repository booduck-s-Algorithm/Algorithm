function solution(files) {
  var answer = [];
  answer = files.sort((a, b) => {
    const left = a.split(/[\d]+/)[0].toLowerCase();
    const right = b.split(/[\d]+/)[0].toLowerCase();
    return left === right
      ? +a.match(/[\d]+/).join("") - +b.match(/[\d]+/).join("")
      : left > right
      ? 1
      : left === right
      ? 0
      : -1;
  });
  return answer;
}
