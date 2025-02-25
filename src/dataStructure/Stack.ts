// 栈结点
class StackNode {
  data: any; // 结点数据域
  next: StackNode | null; // 结点next指针
  constructor() {
    this.data = null;
    this.next = null;
  }
}

// 栈
class Stack {
  top: StackNode | null; // 栈顶指针
  constructor() {
    this.top = null;
  }
}

function createStack(stack: Stack, count: number) {
  let stackNode: StackNode;
  for (let i = 0; i < count; i++) {
    stackNode = new StackNode();
    stackNode.data = i + 1;
    stackNode.next = stack.top;
    stack.top = stackNode;
  }
  return 1;
}

let stack = new Stack();
console.log(createStack(stack, 2)); // 1
console.log(stack); // Stack { top: StackNode { data: 2, next: StackNode { data: 1, next: null } } }
