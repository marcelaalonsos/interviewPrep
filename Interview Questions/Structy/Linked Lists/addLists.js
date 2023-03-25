//prompt
/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.
*/

//approach
/*
handle same length lists:
- traverse lists simultaneous
- pointers at current1 and current2,
- sum those numbers into a new node, and keep on going

handle diff lenghts:
- missing digits would be zero, not create new nodes

what if we need to carry sums
- add the carry as a variable

final carry
- both links lists will have zeros at the end
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//recursive
const addListsRecursive = (head1, head2, carry = 0) => {
  // todo
  if ((head1 === null) & (head2 === null) && carry === 0) return null;
  //if diff lengths
  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;

  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;

  const result = new Node(digit);

  const next1 = head1 === null ? null : head1.next;
  const next2 = head1 === null ? null : head2.next;

  result.next = addListsRecursive(next1, next2, nextCarry);
  return result;
};

//iterative
const addLists = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let carry = 0;
  let current1 = head1;
  let current2 = head2;
  while (current1 !== null || current2 !== null || carry === 1) {
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;

    tail.next = new Node(digit);
    tail = tail.next;
  }
  return dummyHead.next;
};

//analysis for both
/*
n = length of list1
m = length of list2
time: O(max(n,m)
space: O(max(n,m));
*/
