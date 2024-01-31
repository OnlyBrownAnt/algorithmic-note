/**
 * 去除有序数组重复项，返回新数组长度和新数组
 * @param nums
 * @returns
 */
function dualPointers(nums: Array<number>): Object {
  if (nums.length == 1) return { length: nums.length, array: nums };

  let slow = 0;
  let fast = 1;
  // Tip 关键点 循环判断，根据快指针是否已经到达数组最后一位进行判断
  while (fast <= nums.length - 1) {
    // Tip 关键点 判断慢指针移动判断逻辑，快指针一般都是循环过程中默认递增。
    if (nums[fast] != nums[slow]) {
      slow += 1;
      nums[slow] = nums[fast];
    }
    fast += 1;
  }

  return { length: slow + 1, array: nums.slice(0, slow + 1) };
}

console.log(dualPointers([0, 0, 1, 1, 2]));

export {};
