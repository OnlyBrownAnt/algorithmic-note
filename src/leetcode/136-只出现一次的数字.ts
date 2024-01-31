/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]) {
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

export {};

console.log(singleNumber([2, 2, 1]));
