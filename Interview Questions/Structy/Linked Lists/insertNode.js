//prompt
/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
*/

//approach
/*
set up a count variable
at the head, count = 0;
traverse and increment count
when count is 1 less than the target index, then set current next to the new node
what if we insert at the tail? the algo works
what if we insert at the head? set new nodes next to be the head
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  // todo
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index - 1) {
      let temp = current.next;
      current.next = new Node(value);
      current.next.next = temp;
    }
    count += 1;
    current = current.next;
  }
  return head;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(1);
*/
