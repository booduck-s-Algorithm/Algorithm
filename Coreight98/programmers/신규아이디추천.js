function Remove(str) {
  if (str.length > 0 && str[0] === ".") {
    str = str.replace(".", "");
  }

  if (str.length > 1) {
    if (str[str.length - 1] === ".") {
      str = str.slice(0, -1);
    }
  }
  return str;
}
function solution(new_id) {
  var answer = "";

  answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/[.]+/g, ".");
  answer = Remove(answer);
  if (answer.length >= 16) answer = answer.slice(0, 15);
  answer = Remove(answer);
  if (!answer.length) answer += "a";
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }
  return answer;
}
