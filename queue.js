class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
  }

  enqueue(data) {
    node = new _Node(data)
    this.end.next = node
    this.end = node
    if (this.start === null) {
      this.start = node
    }
  }

  dequeue() {
    if (this.start === null) {
      return null
    }
    node = this.start
    this.start = this.start.next
    if (node = this.end) {
      this.end = null
    }
    return node.data
  }
}

module.exports = Queue;
