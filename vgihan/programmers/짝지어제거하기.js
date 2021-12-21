function solution(str) {
  const stack = new Stack();
  str.split("").forEach((s) => {
    if (stack.getTop() === s) {
      stack.pop();
      return;
    }
    stack.push(s);
  });
  return stack.getJoinString() ? 0 : 1;
}
function Stack() {
  this.stack = [];
}
Stack.prototype.push = function (element) {
  this.stack.push(element);
};
Stack.prototype.isEmpty = function () {
  return this.stack.length === 0;
};
Stack.prototype.pop = function () {
  if (this.isEmpty()) return;
  const result = this.stack[this.stack.length - 1];
  this.stack.splice(this.stack.length - 1, 1);
  return result;
};
Stack.prototype.getTop = function () {
  return this.stack[this.stack.length - 1];
};
Stack.prototype.getJoinString = function () {
  return this.stack.join("");
};
