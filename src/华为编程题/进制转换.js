/**
 * 十六进制转二进制
 * @param s
 */
function format(s) {
  let map = new Map([
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["A", 10],
    ["B", 11],
    ["C", 12],
    ["D", 13],
    ["E", 14],
    ["F", 15],
  ]);
  let sum = 0;
  for (let i = s.length - 1; i >= 2; i--) {
    sum += map.get(s.charAt(i)) * Math.pow(16, s.length - 1 - i);
  }
  return sum;
}
console.log(format("0xAA"));
export {};
//# sourceMappingURL=%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2.js.map
