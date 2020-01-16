class Node {
    constructor(value, prev, next){
      this.value = value; 
      this.prev = prev; 
      this.next = next; 
    }
  }
  class DoublyLinkedList {
    constructor(value){
      this.head = {
        value: value,
        prev: null,
        next: null,   
     }
     this.tail = this.head; 
     this.length = 1; 
  }
    
    prepend(value){
     const newNode = new Node(value, null, this.head);
     this.head.prev = newNode; 
     this.head = newNode; 
     this.length++; 
    }
  
    append(value){
     const newNode = new Node(value, this.tail, null); 
     this.tail.next = newNode;  
     this.tail = newNode; 
     this.length++; 
    }
  
    get(index) {
      let counter = 0; 
      let currentNode = this.head; 
      while (counter < index){
        currentNode = currentNode.next
        counter++;  
      }
     return currentNode; 
    }
    insert(index, value){
     const prevNode = this.get(index - 1); 
     const nextNode = this.get(index); 
     const newNode = new Node(value, prevNode, nextNode);
     prevNode.next = newNode;  
     nextNode.prev = newNode; 
     
    }
    remove(index){
        const prevNode = this.get(index - 1); 
        prevNode.next = prevNode.next.next;
        this.tail = prevNode; 
        this.length--;      
    }
    
  }