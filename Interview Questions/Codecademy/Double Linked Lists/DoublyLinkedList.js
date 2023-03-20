const Node = require("./Node");

class DoublyLinkedList {
  // Create your constructor below:
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //add to head method
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    //if currentHead then set previous node to newHead and newHead next node to currentHead
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    //set list head to newHead;
    this.head = newHead;
    //if list has no tail, set tail to newHead
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  //add to tail method
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    //if there is a current tail, set current tails next to newTail and newTail previous to currentTail
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    //set this.tail to newTail
    this.tail = newTail;
    //if no head, set newTail to this.head
    if (!this.head) {
      this.head = newTail;
    }
  }

  //remove head method
  removeHead() {
    const removedHead = this.head;
    //if head has no value, just return
    if (!removedHead) {
      return;
    }
    //set list head to removedHead next node
    this.head = removedHead.getNextNode();
    //if head has a value, set previous node to null
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    //if removedHead is equal to tail, call the removeTail method
    if (removedHead === this.tail) {
      this.removeTail();
    }
    //return removedHead data
    return removedHead.data;
  }

  //removeTail method
  removeTail() {
    const removedTail = this.tail;
    //if removedTail has no value, just return
    if (!removedTail) {
      return;
    }
    //set this.tail to removedTails previous node
    this.tail = removedTail.getPreviousNode();
    //if tail has value, set next to null
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    //if removed tail is equal to head, call remove head method
    if (removedTail === this.head) {
      this.removeHead();
    }
    //return removedTail data
    return removedTail.data;
  }

  //remove by data method
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    //iterate while currentNode is not null and set the currentNode to be the next node
    while (currentNode !== null) {
      //if currentNode data is equal to data, set nodetoremove to currentnode and break
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    //if nodetoremove has no value return null
    if (!nodeToRemove) {
      return null;
    }
    //if nodetoremove is equal to head, then call removehead
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      //else we know the node is in between
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      //now that we have the nodes, we can remove th pointers to and from nodetoremove and have nextnode and previous node to point each other
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = DoublyLinkedList;
