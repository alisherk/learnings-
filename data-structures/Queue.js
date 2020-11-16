class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this.first);
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this);
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    //const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    console.log(this)
    return this;
  
  }
  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Mike');
myQueue.enqueue('Mat');
myQueue.enqueue('Ben');
myQueue.dequeue('Ben')
//myQueue.peek();
