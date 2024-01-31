/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums: Array<number>): number {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    right++;
    if (nums[i] == 1) {
      // continue
    } else {
      left = right;
    }

    if (maxLength < right - left) {
      maxLength = right - left;
    }
  }
  return maxLength;
};
console.log(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 1]));
