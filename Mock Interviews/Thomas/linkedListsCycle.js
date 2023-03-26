//prompt
/*
Detect a cycle in a linked list. Write a function that takes the head of a singly linked list as input and returns true if the list contains a cycle (i.e. if there is a node that is reachable from more than one other node in the list), false otherwise.
*/

//approach
/*
cycle could have any particular pattern
possible there is no cycle
iterate through each node of the list and track which nodes we've seen before
current is the head
start a set to store nodes
check if current node is in the set, if not, insert in the set
if the current node is on the set, cycle is found and return true

*/

//smallest cycle is the head itself "a->a"
//second scenario is currentNode->previous and viceversa "a->b // b->a"

function findCycle(head) {
  // IMPLEMENT ME
  //set
  const nodes = new Set();
  //current = head;
  let current = head;
  //while the list is not empty
  while (current !== null) {
    //check if the nodes set has the current node
    //if it does return true
    if (nodes.has(current)) return true;
    //otherwise add it to the set
    nodes.add(current);
    //sets the current node to the next node
    current = current.next;
  }
  //if at the end of the traversal there were no cycles return not found
  return "none found";
}

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
