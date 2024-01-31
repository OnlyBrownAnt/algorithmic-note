/**
 * 明明生成了
 * N个1到500之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。
 * @param n
 * @param array
 * @returns
 */
function sort(n, array) {
  // JS API排序
  array.sort((a, b) => {
    if (a > b) return 1;
    else if (a == b) return 0;
    else if (a < b) return -1;
  });
  // 快慢双指针
  let left = 0;
  let right = 1;
  while (right <= array.length - 1) {
    if (array[right] != array[left]) {
      array[left + 1] = array[right];
      left++;
    }
    right++;
  }
  //   for (let i = 0; i <= left; i++) {
  //     console.log(array[i]);
  //   }
  return array.slice(0, left + 1);
}
// console.log(sort(3, [2, 2, 1]))
console.log(sort(11, [25, 19, 91, 32, 6, 86, 54, 103, 58, 45, 102]));
export {};
//# sourceMappingURL=%E6%98%8E%E6%98%8E%E7%9A%84%E9%9A%8F%E6%9C%BA%E6%95%B0.js.map
