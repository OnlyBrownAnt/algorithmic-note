export {};

/**
 * 进制知识回顾
 *
 * 二进制
 * Binary、前缀简写0b、尾缀简写B、
 * 进位规则: 逢2进1、最大1
 * 例如: 0b1100、1100B
 *
 * 八进制
 * Octal、尾缀简写O
 * 进位规则: 逢8进1、最大7
 * 例如: 17O
 *
 * 十进制
 * Decimal、尾缀简写D
 * 进位规则: 逢10进1、最大9
 * 例如: 19D
 *
 * 十六进制
 * Hexadecimal、前缀简写0x、尾缀简写D
 * 数字映射: A=10、B=11、C=12、D=13、E=14、F=15
 * 进位规则: 逢16进1、最大F=15
 * 例如: 0xAF、AFH
 */

/**
 * 进制转换规则
 * 1. R进制转换成十进制(R进制代指二进制、八进制、十六进制等进制)
 * 按权展开相加（系数乘以基数的权次方相加）
 * 附加: 权规律，整数位从右到左以0依次递增，小数位从左到右以-1依次递减。
 *
 * 2. 十进制转换成R进制(R进制代指二进制、八进制、十六进制等进制)
 * 整数部分"除R取余法，倒序取出"，小数部分"乘R取整法，顺序取出"
 *
 * 3. 二进制与十六进制转换
 * 3.1 二进制转十六进制
 * 四合一法。从右往左四位一组分组，每一组从右往左都从0开始，然后按权相加，转换为十六进制表示。并依次拼接得到十六进制值。
 * 3.2 十六进制转二进制
 * 一分四，即一个十六进制数分成四个二进制数，用四位二进制按权相加，最后得到二进制数。
 *
 * 4. 八进制与十六进制转换
 * 先让八进制与二进制进行转换，然后二进制与十六进制进行转换。非十进制转换通常都是使用二进制作为中间转换基础。
 */

/**
 * 二进制、八进制、十六进制转十进制
 */

function twoToTen(n: number) {
  let sArray = String(n).split(".");
  let integer = 0;
  let decimal = 0;

  for (let i = 0; i <= sArray[0].length - 1; i++) {
    integer += Number(sArray[0][sArray[0].length - 1 - i]) * Math.pow(2, i);
  }

  if (sArray.length == 2) {
    for (let i = 0; i <= sArray[1].length - 1; i++) {
      decimal += Number(sArray[1][i]) * Math.pow(2, (i + 1) * -1);
    }
  }
  return integer + decimal;
}

function sixteenToTen(n: number) {
  let s = String(n);
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

/**
 * 十进制转二进制、八进制、十六进制
 */
function tenToTwo(n: number) {
  let sArray = String(n).split(".");
  let integer = [];
  let decimal = [];

  let integerTemp = Number(sArray[0]);
  while (integerTemp >= 1) {
    if (integerTemp >= 1) integer.push(integerTemp % 2);
    integerTemp = integerTemp / 2;
  }

  if (sArray.length == 2) {
    let decimalTemp = Number.parseFloat("." + sArray[1]);
    // 保留三位小数
    let count = 3;
    while (count > 0) {
      decimalTemp = decimalTemp * 2;
      decimal.push(Math.floor(decimalTemp));
      count--;
    }
  }

  if (decimal.length > 0)
    return integer.reverse().join("") + "." + decimal.join("");
  else return integer.reverse().join("");
}

function tenToSixTeen(n: number) {}

/**
 *
 * 二进制和十六进制的转换
 *
 */

function twoToSixteen(n: number) {}

function sixteenToTwo(n: number) {}

/**
 * test
 */
function test() {
  // console.log(twoToTen(100.001));
  console.log(tenToTwo(4.125));
}

test();
