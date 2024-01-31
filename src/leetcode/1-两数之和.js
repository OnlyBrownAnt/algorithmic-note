/**
 * 对撞双指针 + hash表
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let right = nums.length - 1;
  let left = 0;
  let map = new Map();
  while (true) {
    if (!map.has(nums[left])) {
      map.set(nums[left], { value: left, flag: "left" });
    }
    if (!map.has(nums[right])) {
      map.set(nums[right], { value: right, flag: "right" });
    }
    if (map.has(target - nums[left])) {
      if (left != map.get(target - nums[left]).value) {
        if (map.get(target - nums[left]).flag == "left") {
          return [map.get(target - nums[left]).value, left];
        } else {
          return [left, map.get(target - nums[left]).value];
        }
      }
    }
    if (map.has(target - nums[right])) {
      if (right != map.get(target - nums[right]).value) {
        if (map.get(target - nums[right]).flag == "right") {
          return [right, map.get(target - nums[right]).value];
        } else {
          return [map.get(target - nums[right]).value, right];
        }
      }
    }
    if (left >= right) {
      return [-1, -1];
    }
    left++;
    right--;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
//# sourceMappingURL=1-%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.js.map
