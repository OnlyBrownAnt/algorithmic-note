/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]) {
  // 快慢双指针
  let slow = 0;
  let fast = 1;
  while (fast <= nums.length - 1) {
    if (nums[fast] != nums[slow]) {
      nums[slow + 1] = nums[fast];

      slow++;
      fast++;
    } else if (nums[fast] == nums[slow]) {
      fast++;
    }
  }
  return slow + 1;
};

export {};

/**
 * 使用快慢双指针
 * 查找符合要求的字串，但是又有固定方向的要求(左往右不规则递增)，但是又不允许新增数组来处理。
 * 所以可以采用快慢双指针的方向，两个比较的序列都在同一个方向。fast处理老数组，slow处理新数据。
 * 最后得到的slow其实就是子序列的最后一位下标。
 */
console.log(removeDuplicates([1, 1, 2, 3]));
