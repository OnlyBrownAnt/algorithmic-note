/**
 * 三瓶空的换一瓶喝、可以借一瓶空水瓶，但是必须还。
 * 求最大可以喝几瓶
 * @param n 空瓶数目
 * @returns
 */
function search(n: number) {
  let left = 0;
  let right = 0;
  let i = 0;
  while (left <= n - 1 && right <= n - 1) {
    if (right - left + 1 == 3) {
      // 换一瓶水
      n++;
      i++;

      right++;
      left = right;
    } else if (right == n - 1 && right - left + 1 == 2) {
      // 借一瓶水
      n++;
    }

    right++;
  }
  return i;
}
export {};

console.log(search(10));
