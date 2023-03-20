const LinkedList = require("./LinkedList");

const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

/*
Prompt: given a linked list, write a function that swaps data at any given node of the list
*/

/*
edge cases: if data1 and data 2 are not in the list, just return to exit out of the function
edge cases: if data1 and data2 are the same, just return to exit out of the function
1. Iterate through the list to find the node that matches the data1 to be swaped (which is node1).
2. keep track of node1 previous node
3. iterate through the list to find the node that matches the data2 to be swaped (which is node2)
4. keep track of node2 previous node
5. if node1 previous node is null, then node1 was the head of the list
6. set the list head to node2
7. if node1 previous has a value, then set its next value to node2
8. if node2 previous node is null, then node2 was the head of the list
9. set the list head to node1
10. if node2 has a value, then set its next value to node1
11. set node1 next node to node2 next node
12. set node2next node to node1 next node
*/

function swapnode(list, data1, data2) {
  //variables
  let node1 = list.head;
  let node2 = list.head;
  let node1prev = null;
  let node2prev = null;

  //edge case 1
  if (data1 === data2) {
    return;
  }

  //iterate to find node1 === data1
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1prev = node1;
    node1 = node1.getNextNode();
  }
  //iterate to find node2 === data2
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2prev = node2;
    node2 = node2.getNextNode();
  }
  //edge case 2
  if (node1 === null || node2 === null) {
    return;
  }
  //if node1prev is null
  if (node1prev === null) {
    list.head = node2;
  } else {
    node1prev.setNextNode(node2);
  }
  //if node2prev is null
  if (node2prev === null) {
    list.head = node1;
  } else {
    node2prev.setNextNode(node1);
  }
  //set node1 next to the next of node2
  //set node 2 next to next of node1
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}

testList.printList();
swapnode(testList, 2, 5);
testList.printList();
