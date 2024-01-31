/**
 * 方法一
 * 数据源先全部处理，正则去掉非字母数字，然后全部转小写，
 * 最后左右指针移动比较。
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "");
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s.charAt(left) == s.charAt(right)) {
      left++;
      right--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
/**
 * 方法二
 * 只对数据做大小写转换处理。
 * 然后在具体比较过程中，每次循环处理左指针和右指针，如果不在数字字母范围就指针移动，跳过不符合要求的元素。最后再进行判断是否相等。
 *
 * 区别就是不需要过度预处理数据，在遍历的时候具体判断ASCII骂大小
 *
 * ASCII
 * 0-9 48-57
 * A-Z 65-90
 * a-z 97-122
 * A a 大小写差值 = 32
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function (s) {
  let left = 0;
  let right = s.length - 1;
  s = s.toLowerCase();
  while (left < right) {
    while (
      s.charCodeAt(left) < 48 ||
      (57 < s.charCodeAt(left) && s.charCodeAt(left) < 65) ||
      (90 < s.charCodeAt(left) && s.charCodeAt(left) < 97) ||
      122 < s.charCodeAt(left)
    ) {
      left++;
    }
    while (
      s.charCodeAt(right) < 48 ||
      (57 < s.charCodeAt(right) && s.charCodeAt(right) < 65) ||
      (90 < s.charCodeAt(right) && s.charCodeAt(right) < 97) ||
      122 < s.charCodeAt(right)
    ) {
      right--;
    }
    if (s.charAt(left) == s.charAt(right)) {
      left++;
      right--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
// console.log(isPalindrome('1A man, a plan, a canal: Panama1'));
// console.log(isPalindrome('A man, a plan, a canal: Panamc'));
console.log(isPalindrome("ab_a"));
export {};
//# sourceMappingURL=125-%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E4%B8%B2.js.map
