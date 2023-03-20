const Node = require("./Node");

class LinkedList {
  constructor() {
    //the list's head is set to null
    this.head = null;
  }
  //method that adds a head
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    //change list head to newHead
    this.head = newHead;
    //check if there is a current head, if true, set this.head next node to currentHead
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  //method to add a tail
  addToTail(data) {
    //temp variable
    let tail = this.head;
    //if tail has no value, list is empty and tail is the head
    //check if tail has no value
    if (!tail) {
      this.head = new Node(data);
    } else {
      //iterate if tail has a next node, until we find the end
      while (tail.getNextNode() !== null) {
        //tail equals the next node
        tail = tail.getNextNode();
      }
      //tails next node equal to new node
      tail.setNextNode(new Node(data));
    }
  }
  //method to remove head
  removeHead() {
    //variable to keep track of original head
    const removedHead = this.head;
    //if removedHead has no value, return to end method
    if (!removedHead) {
      return;
    }
    //set head to removedHead next node
    this.head = removedHead.getNextNode();
    //return removedHeads data
    return removedHead.data;
  }

  //method to print list
  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    //while currentNode is not null, add data to output and set currentNode to be its next node
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output = output + "<tail>";
    console.log(output);
  }
}

module.exports = LinkedList;
