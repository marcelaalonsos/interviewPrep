//prompt
/*
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
*/

//approach
/*
1. create node class with value as parameter, value as property, and next as property, next = null
2. current = head , previous = null
3. while current is not null
4. save current.next in a variable next
5. set current.next to previous;
6. set previous to current
7. set current to next
8. it will keep on going until it reaches the end
9. the tail becomes the new head
10. return the final value of the previous node
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (head) => {
  let current = head;
  let previous = null;
  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(1);
*/
