//prompt
/*
Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.
*/

//approach
/*
depth first recursive
if root is null return null
if the target is equal to the root.null return the root.val as an array
call recursively on left and right of the root
if the left recursion is not null, then return the root val and the left values in an array
if the right recursion is not null, then return the root val and the right values in the array
if it doesn't find anything, return null
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (root, target) => {
  // base cases
  if (root === null) return null;
  if (root.val === target) return [root.val];

  //recursive calls
  const left = pathFinder(root.left, target);
  if (left !== null) return [root.val, ...left];

  const right = pathFinder(root.right, target);
  if (right !== null) return [root.val, ...right];

  //if path was not found
  return null;
};

//analysis
/*
n = number of nodes
time: O(n^2)
space: O(n);
*/
