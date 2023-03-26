//prompt
/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.
*/

//approach
/*

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//depthFirst solution
const treeSum = (root) => {
  // todo
  let result = 0;
  if (root === null) return 0;
  const leftValues = treeSum(root.left);
  const rightValues = treeSum(root.right);
  result = root.val + leftValues + rightValues;
  return result;
};
//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/

//breadthFirst solution
// const treeSum = (root) => {
//   // todo
//   if (root === null) return 0;
//   const queue = [root];
//   let totalSum = 0;
//   while(queue.length > 0) {
//     const current = queue.shift();
//     totalSum += current.val;
//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }
//   return totalSum;
// };
//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
