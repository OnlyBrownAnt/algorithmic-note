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

/**
 * 递归算法核心步骤(数学归纳法)
 * 1. 确认问题是否可以分解为同样形式的子问题，并定义递归公式
 * 2. 根据递归公式，设置递归终止条件
 *
 * - 递归算法的核心就是对问题进行分解，分解类型是按问题形式是否一致。
 *   如果一直分解到最小的，到达临界条件(递归终止条件)后便返回结果。
 * - 递归是一种较底层的算法方式，在分治、回溯等算法都可以用递归算法逻辑。
 */
