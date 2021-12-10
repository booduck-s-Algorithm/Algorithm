function solution(record) {
  var answer = [];
  const change = {
    Enter: (user) => `${user}님이 들어왔습니다.`,
    Leave: (user) => `${user}님이 나갔습니다.`,
  };
  const list = record.reduce((result, element) => {
    const temp = element.split(" ");
    if (temp[2] !== undefined) result[temp[1]] = temp[2];
    if (temp[0] !== "Change") answer.push({ command: temp[0], user: temp[1] });
    return result;
  }, {});
  return answer.map((element) => change[element.command](list[element.user]));
}
