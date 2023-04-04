/*
You are given an array of k linked-lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
*/
/*
Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/

/*
1. pull values of the linked list
2. put them in an array, sort them in the array
3. merge lists with a map
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeKLists = (lists) => {
  //create an empty array to put values of linked lists
  let listOfValues = [];
  //iterate through linkedlists to extract valued
  lists.forEach((linkedList) => {
    //while the list is not null
    while (linkedList) {
      //push the values into the array
      listOfValues.push(linkedList.val);
      //set the node to the next node
      linkedList = linkedList.next;
    }
  });
  //sort the array
  listOfValues.sort((a, b) => a - b);
  //create a holder for the linked list
  let headHolder = new ListNode();
  //set the head as the current node
  let current = headHolder;
  //take the array and map it to the linked list
  listOfValues.map((x) => {
    //x is the node values
    //set a new nodeList with the next value of current
    current.next = new ListNode(x);
    //set current to be next value
    current = current.next;
  });
  //return the next value of head
  return headHolder.next;
};
