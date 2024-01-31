/**
 * @param {number[]} password
 * @return {string}
 */
var crackPassword = function (password) {
  for (let i = 0; i <= password.length - 1; i++) {
    for (let j = 0; j <= password.length - i - 2; j++) {
      if (isBiger(password[j], password[j + 1])) {
        let temp = password[j + 1];
        password[j + 1] = password[j];
        password[j] = temp;
      }
    }
  }
  // return password.join('');
  return password;
};
// 错误的比较方法
// function isBiger(left: number, right: number): Boolean {
//     let strLeft = String(left);
//     let strRight = String(right);
//     let flag = false;
//     if (strLeft.length == strRight.length) {
//         flag = left > right;
//     } else {
//         let max = strLeft.length - strRight.length >= 0 ? strLeft.length : strRight.length;
//         let newStrLeft = '';
//         let newStrRight = '';
//         for(let i = 0; i <= max - 1; i++) {
//             let leftValue = strLeft.charAt(i) ? strLeft.charAt(i) : strLeft.charAt(0);
//             let rightValue = strRight.charAt(i) ? strRight.charAt(i) : strRight.charAt(0);
//             newStrLeft += leftValue;
//             newStrRight += rightValue;
//         }
//         if (strLeft.length > strRight.length) {
//             if (Number(newStrLeft) > Number(newStrRight)) flag = true;
//         } else {
//             if (Number(newStrLeft) >= Number(newStrRight)) flag = true;
//         }
//     }
//     console.log(left, '-', right, 'res: ', flag)
//     return flag;
// }
// 正确的比较方法
function isBiger(left, right) {
  let a = String(left) + String(right);
  let b = String(right) + String(left);
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
/**
 * 找错元素之间的大小关系了，傻乎乎的按位去比较了，浪费了两小时。
 */
console.log(crackPassword([0, 3, 30, 34, 5, 9]));
// console.log(crackPassword([20, 1]))
// console.log(crackPassword([1, 20]))
// console.log(crackPassword([824,938,1399,5607,6973,5703,9609,4398,8247]))
// console.log(crackPassword([12,121]))
// console.log(crackPassword([121,12]));
//# sourceMappingURL=LCR164-%E7%A0%B4%E8%A7%A3%E9%97%AF%E5%85%B3%E5%AF%86%E7%A0%81.js.map
