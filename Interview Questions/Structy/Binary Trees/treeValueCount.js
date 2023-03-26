//prompt
/*
Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.
*/

//approach
/*
if root is null return 0;
create a count variable
start queue with [root];
while queue is not null
current node is equal to the first value put it = queue.shift()
if current left it not null, then push to the queue
if cufrent right is not null then push to the queue
if the value of current is equal to the target, count++
return the count
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//breadthFirst iteratively
const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;
  const queue = [root];
  let count = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
    if (current.val === target) count++;
  }
  return count;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
