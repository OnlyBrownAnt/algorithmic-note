/**
 * 二分查找排除法
 * 将mid右侧作为目标值，在不断比较比较mid和其右侧大小，如果右侧大，left直接获取右侧值。left所造的值就已经确定有一侧是小于当前值的。
 * 如果存在右侧小于等于当前值的情况，而且题目说明值不重复，所以没有等于情况。那么登right = mid时，mid + 1的值是一定小于mid的值的。
 * 当left = right时，跳出循环，就可以得到一个肯定左右值都小于当前值的元素下标了。
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid;
  }
  return left;
};

// let array = [1];
// let array = [1, 2, 3, 1];
// let array = [1,2,1,3,5,6,4];
// let array = [-2147483647,-2147483648]
let array = [5, 1, 2];
console.log(findPeakElement(array));

export {};
