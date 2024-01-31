class ArrayList {
  constructor(maxSize) {
    this.data = new Array(maxSize);
    this.maxSize = maxSize;
    this.length = 0;
  }
}
let arrayList = new ArrayList(20);
console.log(arrayList); // ArrayList { data: [ <20 empty items> ], maxSize: 20, length: 0 }
function insert(arrayList, index, item) {
  if (arrayList.length == arrayList.maxSize) {
    return 0;
  }
  if (index < 1 || index > arrayList.length + 1) {
    return 0;
  }
  if (index <= arrayList.length) {
    for (let i = arrayList.length - 1; i >= index - 1; i--) {
      arrayList.data[i + 1] = arrayList.data[i];
    }
  }
  arrayList.data[index - 1] = item;
  arrayList.length++;
  return 1;
}
// console.log(insert(arrayList, 1, 1)) // 1;
// console.log(arrayList) // ArrayList { data: [ 1, <19 empty items> ], maxSize: 20, length: 1 }
function remove(arrayList, index) {
  if (index < 1 || index > arrayList.length + 1) {
    return 0;
  }
  // empty index data
  arrayList.data[index - 1] = null;
  if (index < arrayList.length) {
    for (let i = index - 1; i < arrayList.length; i++) {
      arrayList.data[i] = arrayList.data[i + 1];
    }
  }
  arrayList.length--;
  return 1;
}
// console.log(insert(arrayList, 1, 1)) // 1;
// console.log(arrayList) // ArrayList { data: [ 1, <19 empty items> ], maxSize: 20, length: 1 }
// console.log(remove(arrayList, 1)); // 1
// console.log(arrayList); // ArrayList { data: [ null, <19 empty items> ], maxSize: 20, length: 0 }
// function find(arrayList: ArrayList, index: number): number{
//     if (index < 1 || index > arrayList.length + 1) {
//         return 0;
//     }
//     return arrayList.data[index - 1];
// }
// console.log(insert(arrayList, 1, 1)) // 1;
// console.log(arrayList) // ArrayList { data: [ 1, <19 empty items> ], maxSize: 20, length: 1 }
// console.log(find(arrayList, 1)); // 1
function update(arrayList, index, item) {
  if (index < 1 || index > arrayList.length + 1) {
    return 0;
  }
  arrayList.data[index - 1] = item;
  return 1;
}
console.log(insert(arrayList, 1, 1)); // 1;
console.log(arrayList); // ArrayList { data: [ 1, <19 empty items> ], maxSize: 20, length: 1 }
console.log(update(arrayList, 1, "update")); // 1
console.log(arrayList); // ArrayList { data: [ 'update', <19 empty items> ], maxSize: 20, length: 1 }
export {};
//# sourceMappingURL=ArrayList.js.map
