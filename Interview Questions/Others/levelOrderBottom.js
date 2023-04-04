//prompt
/*
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
*/

//approach
/*
Level order traversal generally requires Breadth First Search
BFS uses a queue data structure (first in / first out)
1. establish base case, when the tree is empty return []
2. set a variable to an empty array to save the result
3. start the queue with the root
4. while queue[0] or root,
5. then the size = length of queue
6. start an empty array to save the values of the children/leaves
7. while the size is decreasing, becuas we're moving from the bottom up
8. dequeue the first value of the queue and save it in a node variable
9. push the value of the node to the values array
10. if there is left child of the node, then push that to the queue
11. if there is right child of the node, then push that to the queue
12. push the values to the result array
13. return the array reversed
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelOrderBottom = (root) => {
  //base case
  if (root === null) return [];
  //result variable as an empty array;
  let result = [];
  //initialize queue
  let queue = [root];
  //while queue is not empty
  while (queue[0]) {
    //size
    let size = queue.length;
    //variable to save the values of the nodes
    let values = [];
    //while the size is decreasing
    while (size--) {
      //dequeue the first value
      let node = queue.shift();
      //push the value to the values array
      values.push(node.val);
      //if there are children on either side of the node, push to the queue
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    //push values to the result array
    result.push(values);
  }
  //reverse the result array
  return result.reverse();
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n)
*/
