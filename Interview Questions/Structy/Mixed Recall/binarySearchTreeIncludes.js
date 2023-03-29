//prompt
/*
Write a function, binarySearchTreeIncludes, that takes in the root of a binary search tree containing numbers and a target value. The function should return a boolean indicating whether or not the target is found within the tree.

A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.

Your solution should have a best case runtime of O(log(n)).
*/

//approach
/*
- input root of a tree
- input target value
- output is a boolean  true or false whether the target is found in the tree
- we know that it is a binary tree
- left of the root, values are less than the root
- right of the root, values are greater than the root:
- depth first  becuase we have an actual value to compare to the root
- so if value < root --> look to the children in the left, traverse through each children and leaves to find the value, return true if found
- if value > root --> look to the children in the right, traverse through each children and leaves to find the value, return true if found
- if the value is nowhere to be found, return false
- couple edge cases:
- if the tree is empty, return false
- if the target is equal to the root, then return true
      12 -- root
    /   \
   5     18
  / \     \
 3   9     19

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const binarySearchTreeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  let currentNode = root;
  while (currentNode !== null) {
    if (target < root.val) {
      return binarySearchTreeIncludes(root.left, target);
    } else {
      return binarySearchTreeIncludes(root.right, target);
    }
  }
};

//analysis
/*
n = number of nodes

Worst Case

Time: O(n)
Space: O(n)
Best Case (balanced-tree)

Time: O(log(n))
Space: O(log(n))
*/
