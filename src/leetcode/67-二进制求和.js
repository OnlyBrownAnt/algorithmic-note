/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let right1 = a.length - 1;
  let right2 = b.length - 1;
  let res = [];
  let flag = 0;
  while (right1 >= 0 || right2 >= 0) {
    let item1 = right1 >= 0 ? Number(a[right1]) : 0;
    let item2 = right2 >= 0 ? Number(b[right2]) : 0;
    if (item1 + item2 + flag >= 2) {
      res.push(item1 + item2 + flag - 2);
      flag = 1;
    } else {
      res.push(item1 + item2 + flag);
      flag = 0;
    }
    right1--;
    right2--;
  }
  if (flag == 1) res.push(1);
  return res.reverse().join("");
};
/**
 * 双指针
 * 将两个二进制相加逻辑完成一遍。需要特别处理进位flag，如果一个数的下标超出，那么默认给该二进制的这一位填充零。
 */
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "0"));
console.log(addBinary("1111", "1111"));
export {};
//# sourceMappingURL=67-%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%B1%82%E5%92%8C.js.map
