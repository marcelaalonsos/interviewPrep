//prompt
/*
given the head of a linked list, return the list after sorting it in ascending order
- edge cases: if the list is empty, return an empty [];
*/

//approach
/*
base case is head is null, retur null
- create an array to store the values of the nodes
- we want to extract the values of the list
  - while the head is not null
  - push it to the array
  - current becomes the next
- put them in a an array
- sort the array in ascending order
- loop through the array
- the next value is either array at index + 1 or null
- array[i].next = array[i + 1] || null
- return the array[0]

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sortList = (head) => {
  //if there is not a head return null
  if (!head) return null;
  //store current node in variable
  let current = head;
  //create empty array to store values of list
  const nodes = [];
  //while head is not null
  while (head) {
    //push the nodes into the array
    nodes.push(current);
    //set the current to the next value
    current = current.next;
  }
  //sort the nodes array in ascending order
  nodes.sort((a, b) => a.val - b.val);

  //iterate through the array to order the list
  for (let i = 0; i < nodes.length; i++) {
    //the next value of the index at the array, should be the index at the array + 1 or null, to ensure ascending order
    nodes[i].next = nodes[i + 1] || null;
  }
  //return the linked list at [0]
  return nodes[0];
};
