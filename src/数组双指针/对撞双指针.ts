/**
 * 根据有序数组，返回目标值之和的元素位置数组
 * @param nums
 * @param target
 * @returns
 */
function dualPointers(nums: Array<number>, target: number): Array<number> {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // Tip 关键点 判断左右指针移动判断逻辑
    // 规律 有序数组，两边之和小于目标值，需要左指针移动增加两边之和。如过两边之和大于于目标值，需要右指针移动减少两边之和。
    if (target == nums[left] + nums[right]) return [left + 1, right + 1];
    if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}

console.log(dualPointers([2, 7, 11, 15], 9));

export {};
