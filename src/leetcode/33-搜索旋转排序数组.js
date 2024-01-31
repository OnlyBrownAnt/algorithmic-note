/**
 * 这道题花了三个小时，没看具体题解，但是看了思路。总的来说，思路没问题，细节实现过程中问题一大堆。大概有2个小时时间在处理细节。
 *
 * 1. 思路一
 * 找到第一位峰值(两边都小于当前值)。然后把写个中转函数，把当前的下标根据峰值的下标转换为模拟下标。(模拟原数组)然后进行二分查找。
 * > 本来想采用二分查找。但是之前的写的二分查找默认是取最后一位，所以这个思路短了。
 *
 * 2. 思路二
 * 进行二分查找，规律上数组是分段的，左段和右段，如果没有倒序部分，那么右段为空，否则右段的最大值肯定小于左段最小值。
 * 以此为思路中分查找到元素是时，判断元素处于哪一个段，下一个步骤是需要左指针 =  mid + 1夹逼还是右指针 = mid - 1夹逼。
 * 目的就是减少判断的范围。
 * 判断涉及:
 * - 当前值mid是否大于目标值
 * - 当前值mid是否大于nums[0](判断mid值应该属于左段还是右段)
 * - 目标值是否大于左段最小值nums[0](判断目标值应该属于左段还是右段)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      if (nums[mid] >= nums[0]) {
        if (target >= nums[0]) {
          right = mid - 1;
        } else if (target < nums[0]) {
          left = mid + 1;
        } else {
          console.log("error 2");
        }
      } else if (nums[mid] < nums[0]) {
        right = right - 1;
      } else {
        console.log("error 1");
      }
    } else if (nums[mid] < target) {
      if (nums[mid] >= nums[0]) {
        left = left + 1;
      } else if (nums[mid] < nums[0]) {
        if (target >= nums[0]) {
          right = right - 1;
        } else if (target < nums[0]) {
          left = left + 1;
        }
      } else {
        console.log("error 3");
      }
    }
  }
  return nums[left] == target ? left : -1;
};
// let left = 0;
// let right = nums.length - 1;
// while(left < right) {
//     let mid = left + Math.floor((right - left) / 2);
//     if (nums[mid] < nums[mid + 1]) left = mid;
//     else right = mid - 1;
// }
// let k = nums.length - 1 - left;
// let indexk = nums.length - 1 - k;
// console.log(k, '-', indexk);
// if (nums[indexk] == target) {
//     return indexk;
// } else if (nums[indexk] > target && nums[0] <= target) {
//     left = 0;
//     right = indexk;
// } else {
//     left = indexk + 1;
//     right = nums.length - 1;
// }
// while(left < right) {
//     let mid = left + Math.floor((right - left) / 2);
//     if (nums[mid] < target) left = mid + 1;
//     else right = mid;
// }
// return nums[left] == target ? left : -1;
// let array = [4,5,6,7];
// let array = [4,5,6,7,0,1,2];
// let array = [1,3]
let array = [3, 1];
// let array = [5,1,3]
// let array = [4,5,6,7,0,1,2];
console.log(search(array, 3));
export {};
//# sourceMappingURL=33-%E6%90%9C%E7%B4%A2%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84.js.map
