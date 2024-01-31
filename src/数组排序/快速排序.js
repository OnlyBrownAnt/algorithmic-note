// 哨兵划分
function partition(nums, minIndex, maxIndex) {
  let pivot = nums[minIndex]; // 哨兵(取第一位方式、取随机一位方式(需要将这位随机值与第一位进行交换，然后再使用取第一位方式))
  let left = minIndex; // 左指针
  let right = maxIndex; // 右指针
  while (left < right) {
    // 临界情况，指针相撞时的值小于哨兵。
    // 所以先让右指针进行寻找，避免左指针在循环过程中提前跳过了本来该是指针相撞时的下标。
    // 右指针移动
    while (left < right && nums[right] >= pivot) {
      right--;
    }
    // 左指针移动
    while (left < right && nums[left] <= pivot) {
      left++;
    }
    // 当前的左指针值大于哨兵，右指针值小于哨兵，可交换两值
    let temp = nums[right];
    nums[right] = nums[left];
    nums[left] = temp;
  }
  // 指针相撞位置值与哨兵交换
  let temp = nums[left];
  nums[left] = nums[minIndex];
  nums[minIndex] = temp;
  return left;
}
// 递归分解
function quickSort(nums, minIndex, maxIndex) {
  // 根据下标判断是否需要继续
  if (minIndex >= maxIndex) return nums;
  // 哨兵下标
  let partitionIndex = partition(nums, minIndex, maxIndex);
  // 下标分配时，取哨兵下标的左边部分和右边部分，但是不包括哨兵下标。
  // 左子组
  quickSort(nums, minIndex, partitionIndex - 1);
  // 右子组
  quickSort(nums, partitionIndex + 1, maxIndex);
  return nums;
}
/**
 * 这种方法只对原数组进行元素交换，不需要新的数组来承载。
 */
let array = [4, 7, 5, 2, 6, 1, 3];
console.log(quickSort(array, 0, array.length - 1));
//# sourceMappingURL=%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.js.map
