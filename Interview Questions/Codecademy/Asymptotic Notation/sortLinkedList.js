/*
the function sortLinkedList returns a new linked list that is sorted from smallest to largest.
it uses findMax() to return largest element in the list.
*/

/*
pseudo-code to sort a linked list
1. instatiate a new linked list
2. fins the max value of the linked list input
3. inert the max value to the beginning of the new linked list
4. remove the maximum value from the linked list input
5. repeat steps 2-4 until the linked list is empty
6. return the new linked list
*/

const findMax = require("./findMax");

function sortLinkedList(list) {
  let newList = new LinkedList();
  while (list.head !== null) {
    let currentMax = findMax(list);
    list.remove(currentMax);
    newList.addToHead(currentMax);
  }
  return newList;
}

//since there are nested while loops, the big O runtime is n^2
