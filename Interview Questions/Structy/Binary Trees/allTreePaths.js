//prompt
/*
Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

You may assume that the input tree is non-empty.
*/

//approach
/*
depth first recursive
base case hitting a leaf node (a node that has no left or right node) return [[leaf node.val]]
subresults will be combined to the parent above
take current and add it to the front of each path
if we have a null node, then it is an empty array
concat all subarrays together, and add root node to all paths
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = (root) => {
  // base case
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];
  const allPaths = [];
  const subLeft = allTreePaths(root.left);
  for (let sub of subLeft) {
    allPaths.push([root.val, ...sub]);
  }
  const subRight = allTreePaths(root.right);
  for (let sub of subRight) {
    allPaths.push([root.val, ...sub]);
  }

  return allPaths;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
