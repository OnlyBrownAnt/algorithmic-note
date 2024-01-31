/**
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。
 * 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 贪心选择性质分析，如果要分的孩子最多，那么应该从小到大依次分配。
  // 直到最大块饼干分完，或者最小的胃口也大于最大的饼干，那么肯定没有饼干可分了。
  // 所以最好按照饼干和胃口进行排序，由于分饼干是最小优先原则，所以胃口和饼干需要需要从小到大先排序。
  // 转换问题
  // 对数据源进行排序，都从小到大
  g.sort((a, b) => {
    if (a < b) return -1;
    else if (a == b) return 0;
    else if (a > b) return 1;
  });
  s.sort((a, b) => {
    if (a < b) return -1;
    else if (a == b) return 0;
    else if (a > b) return 1;
  });
  // 贪心选择性质
  // 让最小的胃口吃最小的饼
  // 最优子结构
  // 1. 遍历胃口
  // 2. 判断当前胃口是否有合适的饼
  // 3. 如果没有则将饼丢弃，如果有就把饼给他并增加获取饼的人数。两者都等价与减少一个饼
  // 4. 如果饼分完了就结束返回人数结果
  let count = 0;
  for (let i = 0; i <= g.length - 1 && s.length > 0; i++) {
    for (let j = 0; j <= s.length - 1; j++) {
      if (g[i] <= s[j]) {
        s.shift();
        count++;
        break;
      } else {
        s.shift();
        j--;
      }
    }
  }
  return count;
};
// console.log(findContentChildren([1, 2, 3], [1, 1]))
// console.log(findContentChildren([1, 2], [1, 2, 3]))
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
export {};
/**
 * 贪心算法核心点
 * 1. 贪心选择性质
 *    问题的全局最优解可以通过一系列局部最优解（贪心选择）来得到。这是一种性质，贪心算法能解决的问题需要具有这种性质。
 * 2. 最优子结构
 *    存在局部最优解，一个问题的最优解包含其所有子问题的最优解。也是贪心选择性质基础上衍生的子问题结构特点。
 *
 * 贪心算法核心步骤
 * 1. 转换问题
 *    问题和数据本身可能不符合贪心选择性质发现的基础，通常需要先假设贪心选择性质，需要进行转换后验证贪心选择性质。
 * 2. 贪心选择性质
 *    分析问题的贪心选择性质，是发现最优子结构的性质基础。
 * 3. 最优子结构性质
 *    获取局部最优解，分解具体步骤。
 *
 * - 贪心算法的核心是分布求解算法
 *   将求解过程分成若干个步骤，然后根据问题要求选择一种度量标准，每个步骤都应用贪心原则，选取当前状态下最优选择（局部最优解）。
 * - 不能利用子问题的最优解推导出整个问题的最优解，那么这种问题就不具有最优子结构。
 * - 贪心和分治的区别，贪心集中与对最优解的求解过程。分解的是求解过程的步骤，而分治是将问题规模分解成同样形式的子问题。
 * - 所以贪心算法如何设计分解最优解的求解过程是解决问题的重点。
 *
 */
//# sourceMappingURL=%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95.js.map
