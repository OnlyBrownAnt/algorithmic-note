/**
 * 数组中有两个元素之和等于目标值，返回这两个值的下标。
 * @param nums
 * @param target
 * @returns
 */
function twoSum(nums, target) {
  // 枚举对象
  let x = 0;
  let y = 0;
  // 判断条件
  // x + y = target;
  // 枚举范围
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; i <= nums.length - 1; j++) {
      x = nums[i];
      y = nums[j];
      // 判断条件，符合枚举成立条件保存结果
      if (x + y == target) return [i, j];
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
export {};
/**
 * 枚举算法的核心步骤
 * 1. 枚举对象、枚举范围、判断条件
 * 2. 验证判断条件
 *
 * - 枚举算法核心逻辑就是确认枚举对象和范围，通过枚举符合要求的组合来假设判断条件。并进行验证判断条件得到结果。
 * - 枚举是一种较底层的算法方式，在分治、回溯等算法都可以用枚举算法逻辑。
 */
//# sourceMappingURL=%E6%9E%9A%E4%B8%BE%E7%AE%97%E6%B3%95.js.map
