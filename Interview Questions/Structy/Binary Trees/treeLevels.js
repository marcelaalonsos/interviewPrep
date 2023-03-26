//prompt
/*
Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

//approach
/*
iterative depth first
when we add elemnts to the stack, we also want to add the level of the node (is a number)
start stack = [root.val, and level: 0]
pop and that becomes the current
add right node, level is n + 1
add left node, level is n + 1
add left node, level is n + 1 (2)
add right node , level is n + 1 (2);
since level 2 exists, then right val to left val on that level
and so on to the top

//
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeLevels = (root) => {
  // todo
};
