"use strict";

function solution(orders, course) {
  const calComb = orders.reduce((result, order) => {
    getCombination(order).forEach((menu) => {
      if (!result[menu]) result[menu] = 0;
      result[menu]++;
    });
    return result;
  }, {});
  const filteredComb = Object.entries(calComb)
    .reduce((pre, comb) => {
      if (comb[1] <= 1) return pre;
      if (!course.includes(comb[0].length)) return pre;
      pre.push(comb);
      return pre;
    }, [])
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      else if (a[1] < b[1]) return 1;
      if (a[0].length > b[0].length) return -1;
      else if (a[0].length < b[0].length) return 1;
    });
  const classification = filteredComb.reduce((pre, comb) => {
    if (!pre[comb[1]]) pre[comb[1]] = [];
    pre[comb[1]].push(comb[0]);
    return pre;
  }, {});
  const result = Object.keys(classification)
    .reduce((pre, num) => {
      const maxLength = classification[num].reduce((max, menu) => {
        if (max < menu.length) return menu.length;
        return max;
      }, 0);
      pre.push(...classification[num].filter((v) => v.length === maxLength));
      return pre;
    }, [])
    .sort();

  return result;
}
function getCombination(str) {
  const init = Array.from({ length: 2 ** str.length - 1 }).map((v, i) => i + 1);
  return init.reduce((pre, v) => {
    const select = v.toString(2).padStart(str.length, "0");
    const curMenu = str
      .split("")
      .sort()
      .reduce((selectedCook, cook, idx) => {
        if (select[idx] === "0") return selectedCook;
        selectedCook.push(cook);
        return selectedCook;
      }, []);
    if (curMenu.length <= 1) return pre;
    pre.push(curMenu.join(""));
    return pre;
  }, []);
}
