function solution(n, k, cmd) {
  const initList = Array.from({ length: n }).map((v, i) => i);
  const [change, deleteElement, restore, getList] = useList(k, initList);
  const UP = "UP";
  const DOWN = "DOWN";

  cmd.forEach((command) => {
    const [type, size] = command.split(" ");

    switch (type) {
      case "D":
        if (!size) return;
        change(DOWN, parseInt(size));
        break;
      case "U":
        if (!size) return;
        change(UP, parseInt(size));
        break;
      case "C":
        deleteElement();
        break;
      case "Z":
        restore();
        break;
    }
  });

  const temp = Array.from({ length: n }).map((v, i) => "X");
  return getList()
    .reduce((pre, v) => {
      pre[v] = "O";
      return pre;
    }, temp)
    .join("");
}
function useList(initSelected, initList) {
  const UP = "UP";
  const DOWN = "DOWN";
  const stack = [];
  let list = initList;
  let selected = initSelected;
  function push(value) {
    if (stack > 1000000) return;
    stack.push(value);
  }
  function pop(value) {
    if (stack.length <= 0) return;
    return stack.splice(stack.length - 1, 1)[0];
  }
  function changeSelected(type, dist) {
    if (type === UP) {
      selected -= dist;
      return;
    }
    if (type === DOWN) {
      selected += dist;
      return;
    }
  }
  function deleteElement() {
    push({
      index: selected,
      value: list[selected],
    });
    list.splice(selected, 1);
    if (selected >= list.length) {
      selected = list.length - 1;
    }
  }
  function restore() {
    const { index, value } = pop();
    list.splice(index, 0, value);
    if (index > selected) return;
    selected++;
  }
  function getList() {
    return list;
  }
  return [changeSelected, deleteElement, restore, getList];
}
