/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s: string) {
  let left = 0;
  let right = 0;

  let subArray = new Array();
  let maxLength = 0;
  while (right <= s.length - 1) {
    // 元素已经存在，不断left左移动缩减，直到不存在该元素。得到可新一轮迭代的数组。
    while (subArray.indexOf(s.charAt(right)) != -1) {
      left++;
      subArray = subArray.slice(1, subArray.length);
    }
    subArray.push(s.charAt(right));
    maxLength = maxLength < subArray.length ? subArray.length : maxLength;

    right++;
  }
  return maxLength;
};

export {};

/**
 * 滑动窗口
 * 查子串可以采用双指针和窗口的策略，加上有遍历性要求，所以使用窗口。
 * 核心逻辑是对于窗口缩减的处理，当遇到的right上新元素是已经存在的，说明上一次字串已经到最大了。
 * 需要得到新的子串，所以不断缩减左指针，使窗口不包含该right元素时就得到了新的字串。不能将子串直接置空，因为可能存在其中元素与后续元素也都不同的情况。
 */
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));
