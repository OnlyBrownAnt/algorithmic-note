function bubbleSort(nums) {
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
//# sourceMappingURL=%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.js.map
