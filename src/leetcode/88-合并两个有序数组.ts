/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1: number[], m: number, nums2: number[], n: number) {
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
