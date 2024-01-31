/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 快慢指针
  let left = 0;
  let right = 0;
  let average = 0;
  while (right <= prices.length - 1) {
    while (prices[left + 1] <= prices[left] && left < right) {
      left++;
      right = left;
    }
    if (prices[right] < prices[left]) {
      left = right;
    }
    average =
      prices[right] - prices[left] > average
        ? prices[right] - prices[left]
        : average;
    right++;
  }
  return average;
};
/**
 * 快慢双指针
 * 计算指针间的最大值，股票的差值一定是右减左，因为时间方向是固定的，所以采用快慢双指针。
 * left指针移动时机，右侧比自己小，如果比自己大就停止移动。等待完成一次计算差值。
 * 如果右指针发现有值比left指针值还小，那么左侧移动到当前值，作为购买日进行下一次的计算差值。每次都比较保存最大的差值。
 */
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([2, 4, 1]));
export {};
//# sourceMappingURL=121-%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.js.map
