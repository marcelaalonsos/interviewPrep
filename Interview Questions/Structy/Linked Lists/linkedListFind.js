//prompt
/*
Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
*/

//approach
/*
1. create node class with value as parameter, value as property, and next as property, next = null
2. set current = head
3. while current is not null
4. check if current val is equal to target, return true
5. else, set current to next to keep iterating
6. if the value is never found, return false outside the while loop
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
  // todo
  let current = head;
  while (current !== null) {
    if (current.val === target) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(1);
*/
