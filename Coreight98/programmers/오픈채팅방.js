function solution(record) {
  var answer = [];
  const change = (command) => (user) => {
    switch (command) {
      case "Enter":
        return `${user}님이 들어왔습니다.`;
      case "Leave":
        return `${user}님이 나갔습니다.`;
    }
  };
  const list = record.reduce((result, element) => {
    const temp = element.split(" ");
    if (temp[2] !== undefined) result[temp[1]] = temp[2];
    if (temp[0] !== "Change") {
      answer.push({ command: temp[0], user: temp[1] });
    }
    return result;
  }, {});
  answer = answer.map((element) => {
    return change(element.command)(list[element.user]);
  });

  return answer;
}
