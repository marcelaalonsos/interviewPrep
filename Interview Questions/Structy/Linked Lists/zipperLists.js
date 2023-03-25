//prompt
/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
*/

//approach
/*
maintain 2 pointers, one for list1 and another for list2
current1 = head1
current2 = head2
track the tail of the output list - reference how to add nodes to the new output
current1 will be current1.next
simple alternating pattern
count = 0; whenever count is even, we grab nodes from list2, when count is odd, grab node from list1
progress tail to the next after adding to the new list

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
  // todo
  const head = head1;
  let tail = head;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
  return head;
};

//analysis
/*
n = length of list 1
m = length of list 2
time: O(min(n,m))
space: O(1);
*/
