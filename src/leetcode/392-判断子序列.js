/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length == 0) return true;
  let slow = 0;
  let fast = 0;
  while (fast <= t.length - 1) {
    if (t.charAt(fast) == s.charAt(slow)) {
      if (slow == s.length - 1) {
        return true;
      }
      slow++;
    }
    fast++;
  }
  return false;
};
/**
 * 使用快慢双指针来处理
 * 因为子序列顺序是固定的，而且是需要判断子序列是否是序列的子序列。所以两个序列是有重叠性质的，可以堪称一个数组来处理。
 * 所以采用快慢双指针，而不是分离双指针。
 */
console.log(isSubsequence("abc", "ahbgdc"));
export {};
//# sourceMappingURL=392-%E5%88%A4%E6%96%AD%E5%AD%90%E5%BA%8F%E5%88%97.js.map
