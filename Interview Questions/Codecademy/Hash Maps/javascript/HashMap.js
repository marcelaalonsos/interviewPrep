const LinkedList = require("./LinkedList");
const Node = require("./Node");

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  //hash method
  hash(key) {
    //generate an index for each key-value pair
    let hashCode = 0;
    for (let i = 0; i < key; i++) {
      //converts each char on key into integers
      hashCode += hashCode + key.charCodeAt(i);
    }
    //returns the index
    return hashCode % this.hashmap.length;
  }

  //assign method
  assign(key, value) {
    const arrayIndex = this.hash(key);
    //value at arrayIndex
    const linkedList = this.hashmap[arrayIndex];
    console.log(`Storing ${value} at index ${arrayIndex}`);
    //if head is empty, add key/value to it, return to exit
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    //store head node
    let current = linkedList.head.data;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.getNextNode()) {
        const newNode = new Node({ key, value });
        current.setNextNode(newNode);
        break;
      }
      current = current.getNextNode();
    }
  }

  //retrieve method
  retrieve(key) {
    const arrayIndex = this.hash(key);
    //assing head node of the linked list
    let current = this.hashmap[arrayIndex].data;
    while (current) {
      if (current.data.key === key) {
        console.log(
          `\nRetrieving ${current.data.value} from index ${arrayIndex}`
        );
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = HashMap;
