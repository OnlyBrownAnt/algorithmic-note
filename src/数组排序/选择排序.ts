function selectionSort(nums: Array<number>): Array<number> {
  for (let i = 0; i <= nums.length - 1; i++) {
    let tempIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[tempIndex] > nums[j]) {
        tempIndex = j;
      }
    }

    if (tempIndex != i) {
      let temp = nums[tempIndex];
      nums[tempIndex] = nums[i];
      nums[i] = temp;
    }
  }
  return nums;
}

console.log(selectionSort([1, 3, 4, 5, 2]));
