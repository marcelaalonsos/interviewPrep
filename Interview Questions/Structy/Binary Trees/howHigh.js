//prompt
/*
Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.
*/

//approach
/*
recursive depth first
base cases: if node is null return -1
if node has no left or right return 0;
return 1 (because this is the root node) + math.max of recursively calling the function of node.left and node.right
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const howHigh = (node) => {
  // todo
  if (node === null) return -1;
  if (node.left === null && node.right === null) return 0;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
