function solution(n, t, m, p) {
  var answer = "";
  const list = Array.from(Array(t * m + 1).keys())
    .reduce((result, element, index) => {
      result += index.toString(n).toString();
      return result;
    }, "")
    .split("");
  answer = Array.from(Array(t).keys()).reduce((result, element, index) => {
    result += list[p - 1 + index * m].toUpperCase();
    return result;
  }, "");
  return answer;
}
