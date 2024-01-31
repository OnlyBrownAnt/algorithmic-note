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

  if (nums.length <= 1) return nums;

  let left = 0;
  let right = nums.length;
  let mid = left + Math.ceil((right - left) / 2);
  let leftArray = sortArray(nums.slice(0, mid));
  let rightArray = sortArray(nums.slice(mid, right));
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
