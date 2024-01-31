export {};

function insertionSort(nums: Array<number>): Array<number> {
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
