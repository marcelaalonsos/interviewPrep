//prompt
/*
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
*/

//approach
/*
breadth first won't be the way to solve it since we have to return the values in order left to right, and in some edge cases we could end up visiting a leaf node to the right most too early
depth first

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leafList = (root) => {
  //if root is null return an empty array
  if (root === null) return [];
  //set up leave array where we will push the values
  const leaves = [];
  //initialize the stack with [root]
  const stack = [root];
  //while stack has a length
  while (stack.length) {
    //current is the last element we added to the stack
    const current = stack.pop();
    //check if node is the leaf by knowing if its left and right are null
    if (current.left === null && current.right === null)
      leaves.push(current.val);
    //if not the leaves, keep traversing -right goes first to keep left->right order
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return leaves;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
