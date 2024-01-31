/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target: number, nums: number[]): number {
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

export {};

/**
 * 不定长滑动窗口
 * 设置一个参数ans记录最短的滑动窗口长度，设置sumTemp记录当前窗口的容量，每次扩展和缩减时需要进行对应变化。
 * 窗口缩减的时机是当窗口容量sumTemp >= target的时候，并进行循环，每次都要更新左指针和对应，长度ans和窗口容量sumTemp。
 * 处理ans的时候需要处理初次为0的情况，因为比较的时候是要去更小值。正数里没有比0更小的了。
 */
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
