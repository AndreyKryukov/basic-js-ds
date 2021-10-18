const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

module.exports = class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let following = this.list;

    if (!this.list) {
      return this.list = new ListNode(value);
    }

    while (following) {
      if (!following.next) {
        return following.next = new ListNode(value);
      } else {
        following = following.next;
      }
    }
  }

  dequeue() {
    let initialValue = this.list.value;

    if (!this.list) return null;
    this.list.value = this.list.next.value;
    this.list.next = this.list.next.next;
    return initialValue;
  }
}
