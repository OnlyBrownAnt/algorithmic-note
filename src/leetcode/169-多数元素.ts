/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums: number[]) {
  let targetMap = new Map();
  let map = new Map([
    ["left", -1], // 非多数元素targets下标
    ["right", -1], // 多数元素targets下标
  ]);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (!targetMap.has(nums[i])) {
      targetMap.set(nums[i], 1);
    } else {
      targetMap.set(nums[i], targetMap.get(nums[i]) + 1);
    }

    if (targetMap.get(nums[i]) > nums.length / 2) {
      let right = targetMap.has(map.get("right"))
        ? targetMap.get(map.get("right"))
        : 0;
      if (targetMap.get(nums[i]) > right) {
        map.set("right", nums[i]);
      } else {
        // continue
      }
    } else {
      map.set("left", nums[i]);
    }
  }

  return map.get("right");
};

export {};

/**
 * 没有太好的办法，不想用暴力，尽量在一次循环内解决问题。
 * 三个关键信息
 * 1. 多元素 -> 出现次数 > n / 2
 * 2. 元素类型，只会有两种情况，多元素和非多元素
 * 3. 数组是无序的
 *
 * 所以采用大擂台的方式，每次遍历到一个元素，就拿这个元素的出现次数和擂台"right"元素的出现次数进行比较，如果大于就替换下来。
 * 所以还需要用一个hash表来保存，元素值出现过的次数。key = 元素值、value = 出现次数。
 * 遍历完成直接去擂台的right就是得到的最后的多元素。
 */
console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(
  majorityElement([
    1000000000, 1000000000, -1000000000, -1000000000, -1000000000,
  ]),
);
