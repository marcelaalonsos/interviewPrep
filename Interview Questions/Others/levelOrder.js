//prompt
/*
given the root of a binary tree, return the level order traversal of its nodes

example 1:

        3
      /   \
     9    20
         /  \
        15   7
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

//approach
/*
- level order means, from left to right starting from the root node, going down the children and last the leaves
- ideal for breadth first, as it goes horizontally with the children before moving on
- breadth first works with a queue, first in / first out
- edge case: if the root is null return []
- in the example above, we start with the root [3]
- then down one level, say to 9, [3,9]
- then across before moving down [3,9,20]
- so on and so forth
- we have to be careful to indicate that the left child goes first as it is in order
- we use a queue to keep track of the nodes
- initialize the queue with the root node
- we'll have an array to keep the values as we traverse
while the queue is not empty, current node is the first element shift() from the queue, because we take the first things from a queue
push the value of that node to the array
if the left side is not empty, push that to the queue first
if the right side it not empty, push that to the queue after

at the end return the array with the value
*/
//this returns all the values in a single array
const levelOrder = (root) => {
  //base case
  if (!root) return [];
  //initialize queue with root
  const queue = [root];
  //array of values
  const values = [];
  //while the queue is not empty
  while (queue.length > 0) {
    //dequeue the first value
    const current = queue.shift();
    //push it to the array
    values.push(current.val);
    //if the left side is not empty, enqueue it
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return values;
};

//this returns the values in pairs per level
const levelOrder = (root) => {
  //initialize queue with the root, set values array
  let queue = [root],
    values = [];
  //while queue has a value
  while (queue[0]) {
    //length of queue, row array variable to push values of each level
    let qlen = queue.length,
      row = [];
    //loop through the queue
    for (let i = 0; i < qlen; i++) {
      //current value is the first dequeued from the queue
      let current = queue.shift();
      //push value to row
      row.push(current.val);
      //if left of current is not empty, push to queue
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    //push the row values to the values array
    values.push(row);
  }
  //return the values array
  return values;
};

//analysis for both
/*
n = number of nodes
time: O(n)
space: O(n)
*/
