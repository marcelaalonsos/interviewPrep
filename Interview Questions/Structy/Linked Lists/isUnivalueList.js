//prompt
/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
*/

//approach
/*
current is the head
we know that the start value is head.val
start iterating and comparing if the value of the head is not equal to the value of the next node
return false if you find one different
but if not it will traverse the whole list and return true at the end.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head) => {
  // todo
  let current = head;
  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }
  return true;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(1);
*/
