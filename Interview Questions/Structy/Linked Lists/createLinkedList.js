//prompt
/*
Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
*/

//approach
/*
create a dummy head and have a pointer to it called tail
current iterates throuhg the array
given an element of the array create a new node with the element as a value
tail.next is equal to current
return dummy.next at the end
if array is empty return null
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  // todo
  const dummyHead = new Node(null);
  let tail = dummyHead;
  for (let val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummyHead.next;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(n);
*/
