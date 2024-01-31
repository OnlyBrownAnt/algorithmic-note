/**
 * 四个关键Tips
 * 在不同情况下有不同的选择，不同的选择是为了不同场景(直接法、排除法)下使用。
 * 当然不同的选择处理错误也会出现不同的bug，二分查找细节比较多。
 *
 * 1. 区间的开闭
 *  - 左闭右闭 left = 0、right = nums.length - 1
 *  - 左闭右开 left = 0、right = nums.length
 *
 * 2. 出界条件
 *  - <= left <= right
 *  - < left < right
 *
 * 3. mid 的取值问题
 *  - mid偏左 left + 向下取整((right - left) / 2)
 *  - mid偏右 left + 向下取整((right - left + 1) / 2)
 *
 * 4. 搜索区间范围的选择
 *  - mid居中 left = mid + 1、right = mid - 1
 *  - mid偏左 left = mid + 1、right = mid
 *  - mid偏右 left = mid、right = mid - 1
 *
 * 排除法和直接法的区别
 * - 这两种二分法是移动左右指针，重新计算有效区域的mid
 * - 排除法不会在循环之中就返回结果，会返回一个边界的信息再进行结果的处理。一般是向左靠，所以右边界作为else情况处理，right = mid;
 *     每次排除目标元素一定不存在的区间，达到减少问题规模的效果。
 * - 直接法会循环之中找到结果就会直接返回。
 */
function search(nums, target) {
  // 1. 左闭右闭
  let left = 0;
  let right = nums.length - 1;
  // 2. <=
  while (left <= right) {
    // 3. mid偏左
    let mid = left + Math.floor((right - left) / 2);
    // 4. mid居中
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
  }
  return -1;
}
// let array = [1, 2, 3, 4, 5];
// let array = [1, 2, 3, 4, 5, 6];
let array = [1, 2];
// let array = [2];
console.log(search(array, 1));
export {};
//# sourceMappingURL=%E7%9B%B4%E6%8E%A5%E6%B3%95.js.map
