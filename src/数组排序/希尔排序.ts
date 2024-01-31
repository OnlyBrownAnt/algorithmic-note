function shellSort(nums: Array<number>) {
  let size = nums.length;
  let gap = Math.ceil(size / 2); // 下标位置间隔数，而且gap = 数组
  if (size == 1) return nums;

  while (gap > 0) {
    // 分组
    for (let i = 0; i < gap; i++) {
      // 分组进行插入排序
      for (let j = i; j < size; j += gap) {
        let temp = nums[j];
        let k = j;
        while (k >= 0 && nums[k - gap] > temp) {
          nums[k] = nums[k - gap];
          k -= gap;
        }
        nums[k] = temp;
      }
    }
    gap = Math.floor(gap / 2);
  }

  return nums;
}

console.log(shellSort([7, 2, 6, 8, 0, 4, 1, 5, 9, 3]));
// console.log(shellSort([7, 2, 6, 8, 0, 4]))
