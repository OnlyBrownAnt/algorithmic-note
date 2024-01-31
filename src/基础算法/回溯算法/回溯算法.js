/**
 * 返回数组的所有子集，数组内所有元素都不同。
 * @param nums
 * @returns
 */
function premute(nums) {
  let res;
  let path;
  // 最终结果集
  res = [];
  // 临时结果集
  path = [];
  // 递归函数
  function backtraching(array) {
    // 边界条件
    if (path.length == array.length) {
      res.push(JSON.parse(JSON.stringify(path)));
      return;
    }
    // 遍历数据源
    for (let i = 0; i <= array.length - 1; i++) {
      // 筛选条件 - 筛选可选择元素
      if (path.indexOf(array[i]) == -1) {
        // 选择元素
        path.push(array[i]);
        // 递归元素(可选择元素数据源)
        backtraching(array);
        // 撤销选择
        path.pop();
      }
    }
  }
  // 初始化递归
  backtraching(nums);
  return res;
}
console.log(premute([1, 2, 3]));
export {};
/**
 * 回溯的核心逻辑
 * 1. 选择元素
 * 2. 递归元素
 * 3. 撤销元素
 *
 * - 每次选择的元素就会压入在临时结果集。可以将临时结果集看成栈，先压入，撤销时再弹出。
 * - 遇到边界条件，比如数据源遍历完成、可选择元素都选择完成。保存当前分支上临时结果集，开始下一个分支的递归。
 */
//# sourceMappingURL=%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95.js.map
