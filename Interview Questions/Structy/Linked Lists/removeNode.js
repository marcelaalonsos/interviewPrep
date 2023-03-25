//prompt
/*
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.
*/

//approach
/*
effectively reroute the next value of the node to remove the target node
need 2 pointers -one is the current and a previous,
at some point the current will match the target, so the previous can then point to current.next
what if the target is the tail? the algo works as the next value is null so it will become the tail of the list
what if the target is the head? return head.next
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  // todo
  if (head.val === targetVal) return head.next;
  let current = head;
  let previous = null;
  while (current !== null) {
    if (current.val === targetVal) {
      previous.next = current.next;
      break;
    }
    previous = current;
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
