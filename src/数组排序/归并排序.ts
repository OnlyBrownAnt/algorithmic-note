function mergeSort(nums: Array<number>): Array<number> {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2); // 中心下标
  let leftNums = mergeSort(nums.slice(0, mid));
  let rightNums = mergeSort(nums.slice(mid, nums.length));
  return merge(leftNums, rightNums);
}

function merge(
  leftNums: Array<number>,
  rightNums: Array<number>,
): Array<number> {
  let nums = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // 小的优先存入
  while (leftIndex < leftNums.length && rightIndex < rightNums.length) {
    if (leftNums[leftIndex] < rightNums[rightIndex]) {
      nums.push(leftNums[leftIndex]);
      leftIndex++;
    } else if (rightNums[rightIndex] < leftNums[leftIndex]) {
      nums.push(rightNums[rightIndex]);
      rightIndex++;
    }
  }

  // 边界情况处理(左)
  while (leftIndex < leftNums.length) {
    nums.push(leftNums[leftIndex]);
    leftIndex++;
  }

  // 边界情况处理(右)
  while (rightIndex < rightNums.length) {
    nums.push(rightNums[rightIndex]);
    rightIndex++;
  }

  return nums;
}

console.log(mergeSort([7]));
console.log(mergeSort([7, 2, 6, 8, 0, 4, 1]));
console.log(mergeSort([7, 2, 6, 8, 0, 4, 1, 3]));
