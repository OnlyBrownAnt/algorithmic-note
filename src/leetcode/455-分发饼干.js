/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => {
    if (a < b) return -1;
    else if (a == b) return 0;
    else if (a > b) return 1;
  });
  s.sort((a, b) => {
    if (a < b) return -1;
    else if (a == b) return 0;
    else if (a > b) return 1;
  });
  let count = 0;
  for (let i = 0; i <= g.length - 1 && s.length > 0; i++) {
    for (let j = 0; j <= s.length - 1; j++) {
      if (g[i] <= s[j]) {
        s.shift();
        count++;
        break;
      } else {
        s.shift();
        j--;
      }
    }
  }
  return count;
};
// console.log(findContentChildren([1, 2, 3], [1, 1]))
// console.log(findContentChildren([1, 2], [1, 2, 3]))
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
export {};
//# sourceMappingURL=455-%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2.js.map
