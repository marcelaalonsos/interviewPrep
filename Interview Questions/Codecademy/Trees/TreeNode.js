class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  //add child method
  addChild(child) {
    //check if child is instance of treenode, if so push to children
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      //create a new instance of treenode and then add to children
      const newTree = new TreeNode(child);
      this.children.push(newTree);
    }
  }

  //remove child method
  removeChild(childToRemove) {
    //establish length of tree
    const length = this.children.length;
    //filter through children to see if parameter is instance of treenode
    this.children = this.children.filter((child) => {
      if (childToRemove instanceof TreeNode) {
        //if it is return true
        return childToRemove !== child;
      } else {
        //return false
        return child.data !== childToRemove;
      }
    });
    if (length === this.children.length) {
      this.children.forEach((child) => child.removeChild(childToRemove));
    }
  }

  //print method
  print(level = 0) {
    let result = "";
    for (let i = 0; i < level; i++) {
      result += "-- ";
    }
    console.log(`${result}${this.data}`);
    this.children.forEach((child) => child.print(level + 1));
  }

  //depthFirstTraversal method
  depthFirstTraversal() {
    //log the data of current node
    console.log(this.data);
    //call recursively on each child of children
    this.children.forEach((child) => child.depthFirstTraversal());
  }

  //breadthFirst method
  breadthFirstTraversal() {
    //create an array with the current node as its only element
    let queue = [this];
    //while queue is not empty
    while (queue.length > 0) {
      //extract first element of queue and log
      const current = queue.shift();
      console.log(current.data);
      //concat current with children to the queue
      queue = queue.concat(current.children);
    }
  }
}

module.exports = TreeNode;
