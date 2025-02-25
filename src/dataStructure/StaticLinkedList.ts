class StaticLinkedListNode {
  data: any; // 数据域
  cur: StaticLinkedListNode | null; // 数据域
  constructor() {
    this.data = null;
    this.cur = null;
  }
}

class LinkedList extends StaticLinkedListNode {}
