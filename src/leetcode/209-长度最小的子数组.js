/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let ans = 0;
  let sumTemp = 0;
  while (right <= nums.length - 1) {
    sumTemp += nums[right];
    while (sumTemp >= target) {
      ans =
        ans == 0
          ? right - left + 1
          : right - left + 1 < ans
            ? right - left + 1
            : ans;
      sumTemp -= nums[left];
      left++;
    }
    right++;
  }
  return ans;
};
/**
 * 不定长滑动窗口
 * 设置一个参数ans记录最短的滑动窗口长度，设置sumTemp记录当前窗口的容量，每次扩展和缩减时需要进行对应变化。
 * 窗口缩减的时机是当窗口容量sumTemp >= target的时候，并进行循环，每次都要更新左指针和对应，长度ans和窗口容量sumTemp。
 * 处理ans的时候需要处理初次为0的情况，因为比较的时候是要去更小值。正数里没有比0更小的了。
 */
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
export {};
//# sourceMappingURL=209-%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.js.map
