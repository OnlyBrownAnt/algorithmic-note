/**
 * 给定一个整数数组 arr 和两个整数 k 和 threshold
 * 返回长度为 k 且平均值大于等于 threshold 的子数组数目。
 */
function slidWindow(nums: Array<number>, k: number, threshold: number): number {
  // 窗口左指针
  let left = 0;
  // 窗口右指针
  let right = 0;
  // 窗口固定大小
  let windowSize = k;

  // 其他逻辑
  let sum = 0;
  let sumCount = 0;
  while (right <= nums.length - 1) {
    // 其他逻辑
    sum += nums[right];

    // 判断窗口是否达到固定大小
    if (right - left + 1 >= windowSize) {
      // 其他逻辑
      if (sum >= k * threshold) {
        sumCount++;
      }
      sum -= nums[left];

      // 窗口收缩
      left++;
    }
    // 窗口扩张
    right++;
  }

  return sumCount;
}

/**
 * 滑动窗口关键点
 * 1. 使用双指针作为滑动窗口边界
 * 2. 窗口动作有收缩和扩张两个。收缩等于左侧收缩，左指针++。扩张等于右侧扩展，右指针++。
 * 3. 窗口的扩展的时机是默认随迭代增加的，收缩的时机是判断窗口是否达到最大了。
 * 4. 循环的判断逻辑是窗口的右边界是否到达了数组最后边界。
 */
console.log(slidWindow([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
export {};

const s: [number, number, string?] = [1, 1, "1"];
