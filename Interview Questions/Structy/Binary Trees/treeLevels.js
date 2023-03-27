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

//depth first
const treeLevels = (root) => {
  if (root === null) return [];
  const levels = [];
  const stack = [{ node: root, levelNum: 0 }];
  while (stack.length > 0) {
    const { node, levelNum } = stack.pop();
    if (levels.length === levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }
    if (node.right !== null)
      stack.push({ node: node.right, levelNum: levelNum + 1 });
    if (node.left !== null)
      stack.push({ node: node.left, levelNum: levelNum + 1 });
  }
  return levels;
};

//breadth first
// const treeLevels = (root) => {
//   if (root === null) return [];
//   const levels = [];
//   const queue = [{ node: root, levelNum: 0 }];
//   while (queue.length > 0) {
//     const { node, levelNum } = queue.shift();
//     if (levels.length === levelNum) {
//       levels.push([node.val]);
//     } else {
//       levels[levelNum].push(node.val);
//     }
//     if (node.left !== null)
//       queue.push({ node: node.left, levelNum: levelNum + 1 });
//     if (node.right !== null)
//       queue.push({ node: node.right, levelNum: levelNum + 1 });
//   }
//   return levels;
// };

//recursive depth first -- uses a helper function to drive the recursion
// const treeLevels = (root) => {
//   const levels = [];
//   fillLevels(root, levels, 0);

//   return levels;
// };

// //helper function
// const fillLevels = (root, levels, levelNum) => {
//   if(root === null) return;
//   if (levels.length === levelNum) {
//     levels.push([root.val]);
//   } else {
//     levels[levelNum].push(root.val);
//   }

//   fillLevels(root.left, levels, levelNum + 1);
//   fillLevels(root.right, levels, levelNum + 1);
// }

//analysis for all
/*
n = number of nodes
time: O(n)
space: O(n);
*/
