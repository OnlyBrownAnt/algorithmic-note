/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length == 1) return nums[0];
  let ans = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    ans ^= nums[i];
    // 以[2, 1, 4, 2, 4]为例子说明，
    // 每次对一个数进行按位异或之后，如果有相同的数进行了一次按位异或，
    // 那么就会进行恢复到未对两个数进行异或的值。很奇怪，但是这可以当成就是个规律
    // 00 ^ 10 = 10
    // 10 ^ 01 = 11
    // 011 ^ 100 = 111
    // 111 ^ 010 = 101
    // 101 ^ 100 = 001
  }
  return ans;
};
console.log(singleNumber([2, 2, 1]));
export {};
//# sourceMappingURL=136-%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97.js.map
