//prompt
/*
Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.
*/

//approach
/*
uses a queue data structure
a queue have a back and front, enter the back, leave the front
initialize queue with root node
algo:
is the queue empty? no because the root is there, so we remove the root and add it as current
look at the children, add them to the queue, first the left, then the right
empty the left node into the current values, and the go see the children of that node, add them to the queue
next up the the right node, remove from list and add its child to the queue
lastly, check for further children, if not, then all the nodes exit the queue
when queue is empty, we've traversed through it all
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//iteratively
const breadthFirstValues = (root) => {
  // todo
  if (root === null) return [];
  const queue = [root];
  const values = [];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return values;
};

//breadth first is not recursive!!!

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
