//prompt
/*
Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.
*/

//approach
/*
- input head of a linked list
- output boolean true or false
we want to detect if there is a cycle or not
if the list only has 1 value, head, return false
also if the list is empty, retur false
simplest case, is if the node before links back to the next node
                   __
                 /   \
q -> r -> s -> t -> u
how do i tell the traversal that we're in a cycle
we have to track if the node we traversed to, we've been there before
so like to know if you are walking in circles, you reference a landmark, in this case its a node
so we want to store the visited nodes in a variable, in a set object
we start with the head and continue down, adding each node to the visited
if the current node we are traversing through is in the visited, then voila we have a cycle
if not then return false
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListCycle = (head) => {
  const visited = new Set();
  let currentNode = head;
  while (currentNode !== null) {
    if (visited.has(currentNode)) return true;
    visited.add(currentNode);
    currentNode = currentNode.next;
  }
  return false;
};

//analysis
/*
n = number of nodes
Time: O(n)
Space: O(n)
*/
