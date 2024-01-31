/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 快慢双指针
  let slow = 0;
  let fast = 1;
  // 当前元素的重复次数
  let doubleFlag = 0;
  while (fast <= nums.length - 1) {
    // 基本逻辑还是判断快慢指针对应的元素是否相等
    if (nums[fast] != nums[slow]) {
      if (nums[fast] < nums[slow]) {
        // 跳过前面排序被移动的值，该值是肯定小于等于当前值的。
        // continue
      } else {
        doubleFlag = 0;
        nums[slow + 1] = nums[fast];
        slow++;
        fast++;
      }
    } else if (nums[fast] == nums[slow]) {
      if (doubleFlag == 0) {
        // 重复次数 = 0
        nums[slow + 1] = nums[fast];
        slow++;
        doubleFlag++;
      } else if (doubleFlag == 1) {
        // 重复次数 = 0
        // continue
      } else {
        // continue
      }
      fast++;
    }
  }
  return nums.slice(0, slow + 1);
};
/**
 * 使用快慢双指针
 * 查找符合要求的字串，但是又有固定方向的要求(左往右不规则递增)，但是又不允许新增数组来处理。
 * 所以可以采用快慢双指针的方向，两个比较的序列都在同一个方向。fast处理老数组，slow处理新数据。
 * 最后得到的slow其实就是子序列的最后一位下坐标。
 */
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
export {};
// console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
//# sourceMappingURL=80-%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9II.js.map
