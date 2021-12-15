"use strict";

function solution(orders, course) {
  const objToArray = (obj) => {
    return Object.keys(obj).reduce((pre, key) => {
      pre.push({ [key]: obj[key] });
      return pre;
    }, []);
  };
  const codeToChar = (code) => {
    let temp = code;
    const check = Array.from({ length: 26 })
      .map((v, i) => i)
      .reduce((checkArr, cook) => {
        if (temp & (1 === 1)) checkArr.push(cook);
        temp = temp >> 1;
        return checkArr;
      }, []);
    return check.map((code) => String.fromCharCode(code + 65)).join("");
  };
  const result = orders.reduce((preResult, order) => {
    for (let i = 1; i < 2 ** order.length; i++) {
      const selectStrs = i.toString(2).padStart(order.length, "0").split("");
      const numOfCook = selectStrs.reduce((numOfTrue, str) => {
        if (str === "1") return numOfTrue + 1;
        return numOfTrue;
      }, 0);
      if (!course.includes(numOfCook)) continue;
      const key = order.split("").reduce((preSelect, char, idx) => {
        if (selectStrs[idx] === "0") return preSelect;
        const curCode = char.charCodeAt() - 65;
        preSelect += 1 << curCode;
        return preSelect;
      }, 0);
      if (!preResult[key]) preResult[key] = 0;
      preResult[key]++;
    }
    return preResult;
  }, {});
  const answer = objToArray(result)
    .map((obj) => {
      return { [codeToChar(Object.keys(obj)[0])]: obj[Object.keys(obj)[0]] };
    })
    .sort((a, b) => {
      const aEntry = Object.entries(a);
      const bEntry = Object.entries(b);
      if (aEntry[0][1] > bEntry[0][1]) return -1;
      else if (aEntry[0][1] < bEntry[0][1]) return 1;
      if (aEntry[0][0].length > bEntry[0][0].length) return -1;
      else if (aEntry[0][0].length < bEntry[0][0].length) return 1;
    })
    .reduce(
      (pre, element) => {
        const entry = Object.entries(element)[0];
        if (entry[1] === 1) return pre;
        if (pre.length === 0 || entry[1] < pre.value) {
          pre.length = entry[0].length;
          pre.value = entry[1];
          pre.result.push(entry[0]);
          return pre;
        }
        if (entry[0].length < pre.length) return pre;
        pre.result.push(entry[0]);
        return pre;
      },
      { length: 0, value: 0, result: [] }
    )
    .result.sort();
  return answer;
}
