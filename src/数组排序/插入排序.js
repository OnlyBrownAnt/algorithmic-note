function insertionSort(nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    let temp = nums[i];
    let j = i;
    while (j >= 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
  return nums;
}
console.log(insertionSort([2, 1, 4, 5, 3]));
export {};
//# sourceMappingURL=%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F.js.map
