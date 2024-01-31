/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /**
   *  二分查找 排除法
   *  先二分查找列，默认将每行最后一个值作为第一次二查的值。来确定数字的行范围
   *  再二分查找行，确定数组具体的列值
   */
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (matrix[mid][n - 1] < target) left = mid + 1;
    else right = mid;
  }
  //
  let row = left;
  left = 0;
  right = n - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (matrix[row][mid] < target) left = mid + 1;
    else right = mid;
  }
  return matrix[row][left] == target;
};
let array = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
console.log(searchMatrix(array, 1));
export {};
//# sourceMappingURL=74-%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5.js.map
