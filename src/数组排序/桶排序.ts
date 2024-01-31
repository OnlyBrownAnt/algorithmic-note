// 插入排序
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

// Tip 关键点
// 1. 桶的容量、数量、容纳区间设置规则
// 2. 元素分配到桶的分配规则
// 这里的思路是获取数据的最大最小值，预设桶的容纳间隔来处理桶的数量，以及元素分配规则。
// 这里的例子默认桶是无容量上限的(或者是自动扩容的思路)，所以存在大量元素在一个桶的情况。因为只是按容纳区间来分配。
//
// 总的来说，桶排序在数据基础上可以进行多个参数和处理方案的微调，来得到最大的性能。
function bucketSort(nums: Array<number>): Array<number> {
  // 查找数组中最大值和最小值，是为了设置桶数量而处理
  let max = nums[0];
  let min = nums[0];
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
  }

  // 设置桶容纳间隔为9
  let bucketSize = 9;
  // 设置桶数量，求数组中最大值和最小值存在至少容纳间隔，就可以设置有几个桶
  let bucketCount = Math.ceil((max - min) / bucketSize);

  // 初始化桶，采用二维数组
  let buckets = new Array(bucketCount);
  for (let i = 0; i <= buckets.length - 1; i++) {
    buckets[i] = new Array();
  }

  // 将元素放入到对应桶中
  for (let i = 0; i <= nums.length - 1; i++) {
    // 元素和对应桶序号的关系，(元素值 - min) / 间隔数 = 桶的序号，这是一个比例关系。而且通过这种方式处理之后的桶之间的值也是确认大小关系了。
    buckets[Math.floor((nums[i] - min) / bucketSize)].push(nums[i]);
  }

  // 一边对桶排序，一遍拼接排序好的桶。
  let res = new Array();
  for (let i = 0; i <= buckets.length - 1; i++) {
    buckets[i] = insertionSort(buckets[i]);
    res = res.concat(buckets[i]);
  }
  return res;
}

console.log(bucketSort([39, 49, 8, 13, 22, 15, 10, 30, 5, 44]));
