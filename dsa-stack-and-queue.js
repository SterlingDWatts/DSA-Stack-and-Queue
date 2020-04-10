const Stack = require("./stack");
const Queue = require("./queue");

const dsaStackAndQueue = {
  main() {
    const starTreck = new Stack();
    arr = ["Kirk", "Spock", "McCoy", "Scotty"]
    for (const value of arr.values()) {
      starTreck.push(value)
    }

    starTreck.pop()

    this.display(starTreck)
  },
  peek(stack) {
    return stack.top
  },
  isEmpty(stack) {
    return this.peek(stack) === null
  },
  display(stack) {
    let currentNode = stack.top;
    const arr = [];
    while (currentNode !== null) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(arr)
  },
  is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    const sStack = new Stack() 
    for (let i = 0; i < s.length; i++) {
      sStack.push(s[i])
    }
    for (let i = 0; i < s.length; i++) {
      if (sStack.pop() !== s[i]) return false
    }
    return true
  },
  matchingParentheses(s) {
    s = s.replace(/[^(){}\[\]]/g, "")
    const paranthesesStack = new Stack()
    const pairs = [["[", "]"], ["(", ")"], ["{", "}"]]
    const closed = pairs.map(paren => paren[1])
    for (let i = 0; i < s.length; i++) {
      if (closed.includes(s[i])) {
        while (paranthesesStack.top !== null && paranthesesStack.top !== pairs[closed.indexOf(s[i])][0]) {
          top = paranthesesStack.pop();
        }
        if (paranthesesStack.top === null) {
          return false
        } else {
          paranthesesStack.pop();
        }
      } else {
        paranthesesStack.push(s[i])
      }
    }
    return true
  },
  sortedStack(arr) {
    sorted = new Stack()
    notSorted = new Stack()
    for (let i = 1; i < arr.length; i++) {
      while (sorted.top !== null && arr[i] < sorted.top) {
        notSorted.push(sorted.pop())
      }
      sorted.push(arr[i])
      while (notSorted.top !== null) {
        sorted.push(notSorted.pop())
      }
    }
    return sorted
  },
  starTreckQMaker() {
    const starTreckQ = new Queue();
    arr = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"]
    for (const officer of arr.values()) {
      starTreckQ.enqueue(officer)
    }

    starTreckQ.dequeue()
    this.qDisplay(starTreckQ)
  },
  qPeek(queue) {
    return queue.start
  },
  qIsEmpty(queue) {
    return this.qPeek(queue) === null
  },
  qDisplay(queue) {
    if (this.qIsEmpty(queue)) {
      return null
    }
    currentNode = queue.start
    arr = []
    while (currentNode !== null) {
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }
    console.log(arr)
  }
}