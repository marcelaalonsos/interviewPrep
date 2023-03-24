//prompt

/*
Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
*/

//approach
/*
basic counting algorithm
1. create node class with value as parameter, value as property, and next as property, next = null
2. initialize 2 pointers - current = head, and count = 0;
3. while current is not null
4. check if count is equal to index
5. if true, return the value of current
6. else, add 1 to count and set current to next
7. if nothing was found return null
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) {
      return current.val;
    } else {
      count++;
      current = current.next;
    }
    return null;
  }
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(1);
*/
