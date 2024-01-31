/**
 * 基数排序给我看的迷迷糊糊的，主要是排序的思路比较抽象。
 *
 * 排序的基础(最低位优先法)
 * 1. 桶中的元素是有序的，但是这个序指的是当前单位上有序，比如十位，个位。
 * 2. 桶也是有序的，代表当前单位上的大小。第1个桶 < 第2个桶
 *
 * 就是这两个基础。首先桶是有序的，然后桶里的元素是有序的。每次遍历取出来之后就能得到在一个单位上的有序数组。
 * 以最低位优先法，先比较个位，然后比较十位，最后比较到其中最大的位数。最后一次存桶，再取桶，就能得到最高位比较过的数据组合了。
 * 待优化: 未考虑负数情况
 */
function radixSort(nums) {
  // 数组元素的最大位数
  let max = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if ((nums[i] + "").length > max) max = (nums[i] + "").length;
  }
  // 桶集合，二维数组。数字每位最多10个数，所以最多十个桶
  let buckets = new Array(10);
  for (let i = 0; i <= buckets.length - 1; i++) {
    buckets[i] = new Array();
  }
  let temps = nums;
  // 迭代位数
  for (let i = 0; i <= max - 1; i++) {
    // 在每一位进行元素判断存桶操作
    for (let j = 0; j <= temps.length - 1; j++) {
      // 数字第i + 1位数字 = Math.floor(temps[j] / Math.pow(10, i) % 10)
      buckets[Math.floor((temps[j] / Math.pow(10, i)) % 10)].push(temps[j]);
    }
    temps = [];
    // 按桶的顺序取出数据
    for (let i = 0; i <= buckets.length - 1; i++) {
      temps = temps.concat(buckets[i]);
      // 重置桶
      buckets[i] = new Array();
    }
  }
  return temps;
}
console.log(radixSort([692, 924, 969, 503, 871, 704, 542, 436]));
//# sourceMappingURL=%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F.js.map
