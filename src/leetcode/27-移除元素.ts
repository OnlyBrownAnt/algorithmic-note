/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums: number[], val: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (nums[right] == val && left < right) {
      right--;
    }

    while (nums[left] != val && left < right) {
      left++;
    }

    let temp = nums[right];
    nums[right] = nums[left];
    nums[left] = temp;
  }
  return nums[left] != val ? left + 1 : left;
};

export {};

/**
 * 对撞双指针
 * 题目的需求就是变相将目标值全部移动到数组最右侧。于是可以采用对撞双指针，将左侧的目标值与右侧分非目标值进行交换。
 * 循环中，所以先遍历右侧，当遇到不是目标值时暂停。遍历左侧，遇到目标值时暂停，然后交换位置。开启下一次循环
 * Tip 注意在左右两侧循环时要加上left < right标志，避免循环之后结果left != right的情况。
 * 最后还有个临界判断，判断left = right时，这个值是不是目标值，如果是的话长度 = left，否则长度= left + 1
 */
// console.log(removeElement([3,2,2,3], 3));
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))
console.log(removeElement([3, 3], 3));
