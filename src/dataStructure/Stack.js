// 栈结点
class StackNode {
  constructor() {
    this.data = null;
    this.next = null;
  }
}
// 栈
class Stack {
  constructor() {
    this.top = null;
  }
}
function createStack(stack, count) {
  let stackNode;
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
//# sourceMappingURL=Stack.js.map
