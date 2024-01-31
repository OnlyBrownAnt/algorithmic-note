/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n: any) {
  let res = 0;
  while (n > 0) {
    if ((n & 1) == 1) res++;
    n >>>= 1;
  }
  return res;
};

export {};

/**
 * 使用 n & 1 判断当前位的奇偶性。而且二进制也只存在0和1的情况
 * 每处理一位就移动一位
 *
 * 技巧就是 移动二进制 + 位运算得到位数据
 */
console.log(hammingWeight(0b00000000000000000000000000001011));
console.log(0b11111111111111111111111111111101);
