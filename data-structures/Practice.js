class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = {
        data: data, 
        next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    const newNode = new Node(data); 
    this.tail.next = newNode; 
    this.tail = newNode;
  }
  prepend(data) {
    const newNode = new Node(data, this.head); 
    this.head = newNode;
  }
}

const list = new LinkedList(2);
list.prepend(1);
list.prepend(0);
console.log(list);
