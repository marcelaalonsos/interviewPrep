const LinkedList = require("./LinkedList");

class Stack {
  constructor(maxSize = Infinity) {
    //instantiate a stack property with a new linkedList class
    this.stack = new LinkedList();
    //size property
    this.size = 0;
    this.maxSize = maxSize;
  }

  //hasRoom method
  hasRoom() {
    if (this.size < this.maxSize) {
      return true;
    } else {
      return false;
    }
  }

  //isEmpty method
  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }

  //push method
  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }

  //pop method
  pop() {
    //check if stack is empty before returning a value
    if (!this.isEmpty()) {
      //find the top of the stack and return it
      const value = this.stack.removeHead();
      //decrease size by 1
      this.size--;
      return value;
    } else {
      throw new Error("Stack is empty");
    }
  }

  //peek method
  peek() {
    //returns a valid value when it is not empty
    if (!this.isEmpty()) {
      //returns the data of the stack's top element
      return this.stack.head.data; //get head property
    } else {
      return null;
    }
  }
}

module.exports = Stack;
