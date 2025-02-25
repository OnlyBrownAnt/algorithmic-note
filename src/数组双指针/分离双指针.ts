/**
 * 返回两个无序数组交集
 * 这个题用双指针不好处理，因为没法判断已经移动过的数据组合，必须要求数组是有序的。
 * @param nums
 * @returns
 */
function dualPointers(
  nums1: Array<number>,
  nums2: Array<number>,
): Array<number> {
  // 需要先进行排序，否则就需要其他方式处理这个无序的情况
  // JS的sort方法是按照Unicode 指针顺序比较的，所以需要自定义比较逻辑。
  nums1.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else if (a == b) return 0;
    return 0;
  });
  nums2.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else if (a == b) return 0;
    return 0
  });

  let left_1 = 0;
  let left_2 = 0;

  let res = new Array();
  // Tip 循环判断逻辑 分离指针都小于各种数组的长度
  while (left_1 < nums1.length && left_2 < nums2.length) {
    // Tip 分离指针同时移动、单个指针移动的判断逻辑
    if (nums1[left_1] == nums2[left_2]) {
      // 去重处理
      if (res.indexOf(nums1[left_1]) == -1) {
        res.push(nums1[left_1]);
      }
      left_1++;
      left_2++;
    } else if (nums1[left_1] < nums2[left_2]) left_1++;
    else if (nums1[left_1] > nums2[left_2]) left_2++;
  }

  return res;
}

// console.log(dualPointers([1, 2, 2, 1], [2, 2]));
// console.log(dualPointers([4,9,5], [9,4,9,8,4]))
console.log(
  dualPointers(
    [
      61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12,
      86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30,
      67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4,
      63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81,
      88, 60, 10, 55, 66, 82, 0, 79, 11, 81,
    ],
    [
      5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92,
      84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
    ],
  ),
);

export {};
