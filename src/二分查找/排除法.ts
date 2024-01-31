function search(nums: Array<number>, target: number): number {
  // 1. 左闭左闭
  let left = 0;
  let right = nums.length - 1;

  // 2. <
  while (left < right) {
    // 3. mid偏左
    let mid = left + Math.floor((right - left) / 2);
    // 4. mid偏左
    // 排除[left, mid]，在[mid + 1, right]查找
    if (nums[mid] < target) left = mid + 1;
    // 排除[mid, right]，在[left, mid]查找
    else right = mid;
  }
  // 2. < 情况下，需要补充边界判断，此时left = right，刚好处于边界状态。还可以根据当前值和目标值的大小确认相对的插入坐标。
  return nums[left] == target ? left : -1;
}

export {};

// let array = [1, 2, 3, 4, 5];
// let array = [1, 2, 3, 4, 5, 6];
// let array = [1, 2];
let array = [2];
console.log(search(array, 2));
