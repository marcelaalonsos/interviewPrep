//prompt
/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
*/

//approach
/*
1. create node class with value as parameter, value as property, and next as property, next = null
2. set var total = 0
3. set current node to head
4. while current is not null
5. add values of current to total
6. set current to next node
7. return total
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
  // todo
  let total = 0;
  let current = head;
  while (current !== null) {
    total += current.val;
    current = current.next;
  }
  return total;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(1);
*/
