function countingSort(nums: Array<number>): Array<number> {
  // 获取最大值
  let max = nums[0];
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > max) max = nums[i];
  }

  // 计数数组(下标=数、值=数出现次数)
  let counts = new Array(max + 1).fill(0);
  for (let i = 0; i <= nums.length - 1; i++) {
    counts[nums[i]]++;
  }

  // 前缀和数组(累积计数数组)(下标=数、值=数在原数组中最后的下标 + 1)
  // Tip 这里可以不需要额外步骤去处理掉下标多余增加的1。在处理结果数组阶段处理掉就行。
  for (let i = 1; i <= counts.length - 1; i++) {
    counts[i] = counts[i] + counts[i - 1];
  }

  // 装载结果数组
  // Tip 不能直接覆盖原数组，因为在遍历时倒序的，但是填充是无序的，可能会填充还会进行遍历的下表。
  let res = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i];
    res[counts[num] - 1] = num;
    // tip 因为是遍历原数组，而且这里的前缀和数组已经进行过元素数量的计算，元素个数是确定的。
    // 所以不存在前缀和数组值变成负数的情况，而且为0的时候也不会再被处理，因为该下标元素已经被处理过了。
    counts[num]--;
  }
  return res;
}

console.log(countingSort([3, 0, 4, 2, 5, 1, 3, 1, 4, 3]));
