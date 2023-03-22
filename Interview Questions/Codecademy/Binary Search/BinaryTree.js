class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }
  //insert method
  insert(value) {
    //check if value is less than this.value
    if (value < this.value) {
      //check if there is no left node
      if (!this.left) {
        //if not, create new instance of binary tree with value and depth + 1
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        //insert value to left
        this.left.insert(value);
      }
    } else {
      //check if right exists
      if (!this.right) {
        //if not create new instance of binary tree with value and depth + 1
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        //insert value to right
        this.right.insert(value);
      }
    }
  }

  //getNodeByValue method
  getNodeByValue(value) {
    //if target value is equal to root node value return the node
    if (value === this.value) {
      return this;
      //if left exists and value is less than this.value
    } else if (this.left && value < this.value) {
      //call method on left
      return this.left.getNodeByValue(value);
    } else if (this.right) {
      return this.right.getNodeByValue(value);
    } else {
      //if value deos not exist
      return null;
    }
  }

  //depthFirstTraversal method
  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
      console.log(this.value);
    }
    if (this.right) {
      this.right.depthFirstTraversal();
      console.log(this.value);
    }
  }
}

module.exports = BinaryTree;
