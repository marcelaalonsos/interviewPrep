//prompt
/*
Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.
*/

//approach
/*
breadth first approach
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
  //set queue to [root];
  const queue = [root];
  //set current to null and it will be overwrote as we traverse
  let current = null;
  //while queue length is greater than 0;
  while (queue.length > 0) {
    //reassgn current to be the first item of the queue
    current = queue.shift();
    //if left it not null, push it to the queue
    if (current.left !== null) queue.push(current.left);
    //if right is not null push it to the queue
    if (current.right !== null) queue.push(current.right);
  }
  //return the value of current as it is the last remaining on the queue
  return current.val;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
