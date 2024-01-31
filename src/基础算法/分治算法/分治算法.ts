/**
 * 给你一个整数数组 nums，请你将该数组升序排列。
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums: number[]): number[] {
  // 归并排序 分治算法

  // 分解 不断分解多数排序的问题变成两数排序的子问题
  // 求解 对子问题进行单独的处理
  // 合并 不断对子问题结果进行合并为上一层父问题的结果

  // 求解 判断边界条件返回结果
  if (nums.length <= 1) return nums;

  // 分解，确认分解规则，这里是取中间值偏右的方式进行递归分解问题
  let left = 0;
  let right = nums.length;
  let mid = left + Math.ceil((right - left) / 2);
  let leftArray = sortArray(nums.slice(0, mid));
  let rightArray = sortArray(nums.slice(mid, right));

  // 合并，合并子问题的结果作为父问题结果
  return merge(leftArray, rightArray);
};

var merge = function (leftArray: number[], rightArray: number[]): number[] {
  let left = 0;
  let right = 0;
  let res = [];

  while (left < leftArray.length && right < rightArray.length) {
    if (leftArray[left] <= rightArray[right]) {
      res.push(leftArray[left]);
      left++;
    } else {
      res.push(rightArray[right]);
      right++;
    }
  }

  while (left < leftArray.length) {
    res.push(leftArray[left]);
    left++;
  }

  while (right < rightArray.length) {
    res.push(rightArray[right]);
    right++;
  }

  return res;
};

export {};

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));

/**
 * 分治算法核心步骤
 * 分解 不断分解问题变成可同样形式问题的子问题
 * 求解 对子问题进行单独的处理，并在边界判断后返回结果。
 * 合并 不断对子问题结果进行合并为上一层父问题的结果
 *
 * - 分治算法本质上也是对问题的分解，对子问题的求解和合并。
 * - 分治算法和递归的区别是，分治算法在递归基础上进行对不断子问题的合并处理，得到的问题解。而递归算法是相对更底层更通用的分解逻辑。
 */
