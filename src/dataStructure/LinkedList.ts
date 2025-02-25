class LinkedListNode {
  data: any; // 数据域
  next: LinkedListNode | null; // 指针域 - 直接后继指针
  constructor() {
    this.data = null;
    this.next = null;
  }
}

class LinkedList extends LinkedListNode {}

// function createLinkedList(l: LinkedListNode, n: number): number {
//     let p = new LinkedListNode();
//     l.next = null;

//     for(let i = 0; i < n; i ++) {
//         p = new LinkedListNode();
//         p.data = i;
//         p.next = l.next;
//         l.next = p;
//     }

//     return 1;
// }

function createLinkedList(l: LinkedListNode, n: number): number {
  let p = new LinkedListNode();
  let r = new LinkedListNode();
  l.next = null;

  r = l;

  for (let i = 0; i < n; i++) {
    p = new LinkedListNode();
    p.data = i;
    r.next = p; // r的引用地址实际是l的引用地址，所以这里修改r.next，实际上修改的是l.next
    r = p; // r与p进行交换，只是表示当前的最新结点是上一次创建的p结点。并没有修改l结点。
  }
  r.next = null;

  return 1;
}

let l = new LinkedList();
createLinkedList(l, 3); // {"data":null,"next":{"data":0,"next":{"data":1,"next":{"data":2,"next":null}}}}

function find(l: LinkedListNode, i: number, result: any) {
  let p = new LinkedListNode();
  p = l.next as LinkedListNode;
  let j = 1;
  if (i < 1) {
    return 0;
  }

  while (p && j < i) {
    p = p.next as LinkedListNode;
    j++;
  }

  if (!p || j > i) {
    return 0;
  }

  result.data = p.data;
  return 1;
}

let result = { data: "" };
console.log(find(l, 2, result)); // 1
console.log(result); // { data: 1 }

export {};
