//prompt
/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
*/

//approach
/*
recursively
fill in the right and left nodes of any nodes to null
those null nodes are set equal to infinity
compare node between infinity and infinity
compare left subtree value and right subtree value to the current node, and return the smallest value
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//iteratively depth first
const treeMinValue = (root) => {
  const stack = [root];

  let smallest = Infinity;
  while (stack.length) {
    const current = stack.pop();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }
  return smallest;
};

//recursively depth first
// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   const leftMin = treeMinValue(root.left);
//   const rightMin = treeMinValue(root.right);
//   return Math.min(root.val, leftMin, rightMin);
// }

//iteratively breadth first
// const treeMinValue = (root) => {
//   const queue = [root];

//   let smallest = Infinity;
//   while (queue.length) {
//     const current = queue.shift();
//     if (current.val < smallest) smallest = current.val;

//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }
//   return smallest;
// };

//analysis for all
/*
n = number of nodes
time: O(n)
space: O(n);
*/
