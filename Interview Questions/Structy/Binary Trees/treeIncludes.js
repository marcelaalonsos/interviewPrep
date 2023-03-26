//prompt
/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
*/

//approach
/*
breadth-first approach:
if root is null return false
if root.val is equal to the target, return true
start queue with [root];
while the length of the queue is longer than 0
current is queue.shift();
check if left or right is not null and push those to the queue
lastly if the current.val === target return true
if nothing
return false outside the while loop
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//iteratively
const treeIncludes = (root, target) => {
  // todo
  if (root === null) return false;
  if (root.val === target) return true;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
    if (current.val === target) return true;
  }
  return false;
};
//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/

//recursively
// const treeIncludes = (root, target) => {
//   if (root === null) return false;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };
//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
