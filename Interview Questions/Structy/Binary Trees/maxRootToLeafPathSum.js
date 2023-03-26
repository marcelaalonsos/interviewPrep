//prompt
/*
Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

You may assume that the input tree is non-empty.
*/

//approach
/*
recursively depth first
think base cases as node being their own path
locate all leaf nodes and return values in all of them
choose the biggest node as it traverses up the tree
add the leaf node val to the current node val
if you have a null leaf node, set it to -Infinity
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
  // base case
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxChild;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
