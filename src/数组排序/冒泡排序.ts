function bubbleSort(nums: Array<number>): Array<number> {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = 0; j <= nums.length - i - 2; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log(bubbleSort([1, 3, 5, 4, 2]));
