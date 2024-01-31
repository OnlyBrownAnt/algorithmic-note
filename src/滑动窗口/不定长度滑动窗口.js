/**
 * 给定一个字符串s，找出其中不含有重复字符的最长子串的长度。
 */
function slidWindow(s) {
  // 窗口左指针
  let left = 0;
  // 窗口右指针
  let right = 0;
  let max = 0;
  while (right <= s.length - 1) {
    // 判断窗口是否达到固定大小
    if (s.substring(left, right).includes(s.charAt(right))) {
      max = max <= right - left ? right - left : max;
      // 窗口收缩 // 该场景需要重置窗口，所以左指针和右指针设置为重合。
      left = right;
    }
    // 窗口扩张
    right++;
  }
  return max;
}
/**
 * 滑动窗口不固定长度和固定长度的区别主要在于左侧收缩操作的判断逻辑。
 * 不定长可以根据具体算法需求确认窗口收缩的判断逻辑，以及收缩幅度，固定长收缩幅度默认是1.
 */
console.log(slidWindow("abcabcbb"));
console.log(slidWindow("bbbbbb"));
console.log(slidWindow("144"));
export {};
//# sourceMappingURL=%E4%B8%8D%E5%AE%9A%E9%95%BF%E5%BA%A6%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3.js.map
