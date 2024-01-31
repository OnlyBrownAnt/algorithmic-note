/**
 * 二分查找的排除法
 * 获取最后left和right重合的元素就是临界元素，判断该元素与目标值的大小关系获得相对坐标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }

  if (nums[left] < target) return left + 1;
  else if (nums[left] >= target) return left;
};

console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 3));
console.log(searchInsert([1, 3, 5, 6], 7));
