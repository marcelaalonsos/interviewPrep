class Node {
  constructor(data) {
    this.data = data;
    //next node property - orphan node (a node with no links)
    this.next = null;
  }
  //takes node and updates next to the node
  setNextNode(node) {
    //check if variable is an intanceof Node Class
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }
  //get next node returns next property
  getNextNode() {
    return this.next;
  }
}

//check node class has the correct data
// const firstNode = new Node(1);
// console.log(firstNode.data);
// console.log(firstNode.next);

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I am the next node!");
//use method to link secondNode to firstNode
firstNode.setNextNode(secondNode);
//log firstNode to see its entirety
// console.log(firstNode);
//get the next node from the first
console.log(firstNode.getNextNode());

module.exports = Node;
