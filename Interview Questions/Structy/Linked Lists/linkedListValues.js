//prompt
/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.
*/

//approach
/*
1. create node class with value as parameter, value as property, and next as property, next = null
2. set array to store values
3. set current node to head
4. while current is not null
5. push values of current to array
6. set current to next node
7. return array
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  // todo
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
