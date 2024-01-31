/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 插入排序
  for (let i = 0; i <= n - 1; i++) {
    let j = m + i;
    while (j >= 0) {
      if (nums1[j - 1] > nums2[i]) {
        let temp = nums2[i];
        nums1[j] = nums1[j - 1];
        nums1[j - 1] = temp;
      } else {
        nums1[j] = nums2[i];
        j = -1;
      }
      j--;
    }
  }
  return nums1;
};
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([0], 0, [1], 1));
export {};
//# sourceMappingURL=88-%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84.js.map
