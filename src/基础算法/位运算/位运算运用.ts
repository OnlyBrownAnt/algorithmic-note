export {};
/**
 *  n & 1 取最后一位
 *  全1才1、有0则0。
 *  得到的数据中，除了最后一位可以进行得到n的最后一位，其他位得到的都是0。因为1向左填充默认是0。
 *
 *  最后一位为0的s | 1 改变二进制s的最后一位为1
 *  有1就1，全0才0。
 *  得到的数据中，最后一位被赋值为1，其他位保持不变，变相实现了改变s的最后一位为1。
 */

/**
 * 交换两个数，不使用临时变量。
 */
function changeNum(a: number, b: number) {
  // 以a == 1、b == 2举例子解释过程
  // a == 01、b == 10
  a ^= b; // a ^ b = 11, a == 11
  b ^= a; // b ^ a = 01, b == 01
  a ^= b; // a ^ b = 10, a == 10
  console.log(a, " ", b);
}

/**
 * 判断奇偶
 * 奇数的原码二进制最后一位一定为1。
 * 偶数的原码二进制最后一位一定为0。
 */
function judgeOddAndEven(n: number) {
  if ((n & 1) == 1) console.log("奇数");
  else if ((n & 1) == 0) console.log("偶数");
}

/**
 * 一个数组中只有一个数是单个，其他数都是偶数。查询这个数
 * 采用按位异或(^)
 * @param nums
 * @returns
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
  console.log(ans);
};

changeNum(1, 2);
judgeOddAndEven(21);
judgeOddAndEven(22);
singleNumber([2, 2, 1]);
