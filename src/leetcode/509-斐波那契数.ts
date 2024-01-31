/**
 * 计算第n个斐波那契数列
 *
 * @param {number} n
 * @return {number}
 */
var fib = function (n: number): any {
  // 确认问题是否可以分解为同样形式的子问题，定义递归公式。
  /**
   * 斐波那契数列数学公式
   * f(0) = 0;
   * f(1) = 1;
   * f(n) = f(n - 1) + f(n - 2); n > 1
   */

  // 根据递归公式，设置递归终止条件
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fib(n - 2) + fib(n - 1);
};

export {};

console.log(fib(3));
