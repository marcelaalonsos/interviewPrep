//prompt
/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

//approach
/*
- we're givent the root of a tree
- output is the depth of the tree -i.e. on either branch how deep does it go - nodes
- if we are given a tree of only the root, the depth/height is 1
- since root counts as 1 level, so any other children and leaves are level += 1
          O  root - height = 1
        /   \
      O      O  height = 2
            / \
          O    O   leaf - height = 3
- max depth / height of tree is the numbers of nodes in the path from root to last leaf
- edge case, if root is null, then return 0
- depthfirst search is the best use as it will exhaust all the paths from each children until mocing to the next side, to it will find it faster
- an empty tree has 0 height, and a leaf will have null children nodes, equating 0
- the logic is from the bottom up, take the max edge from either left or right of the children moving up, and increase by 1
- take the max of calling the function recursively on the left and right sides of the tree and adding 1 to it
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxDepth = (root) => {
  //if tree is empty, return 0
  if (root === null) return 0;
  //if tree only has the root node, then the height is just 1
  if (root.left === null && root.right === null) return 1;
  //return the max of calling the function recursively on the left and right of the tree + 1
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n)

*/
