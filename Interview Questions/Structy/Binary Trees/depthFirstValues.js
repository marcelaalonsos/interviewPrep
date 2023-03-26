//prompt
/*
Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.
*/

//approach
/*
add the root to a collection,
from there, go to the left, and deeper on the tree before moving laterally
then to the right side and down that route

depth first uses a stack as a data structure - you can only add things to the top and remove from the top of the stack
add root to stack (instance of that node).
the algo first checks if the stack is empty
since we added the root, it is not
so then we pop the root and assign it to current
when something leaves the stack it means it was visited
then go down the tree, to the children
first add the right child and then the left child, because when we pop them, the left will be current first,
check the next level, and do the same - add right to the stack first and then left
**check if children exists before adding to stack

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//iterative
const depthFirstValues = (root) => {
  // todo
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

//recursively
const depthFirstValuesRecursive = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValuesRecursive(root.left);
  const rightValues = depthFirstValuesRecursive(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

//analysis for both
/*
n = number of nodes
time: O(n)
space: O(n);
*/
