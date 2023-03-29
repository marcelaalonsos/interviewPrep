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
  let listOfValues = [];
  lists.forEach((linkedList) => {
    while (linkedList) {
      listOfValues.push(linkedList.val);
      linkedList = linkedList.next;
    }
  });
  listOfValues.sort((a, b) => a - b);

  let headHolder = new ListNode();
  let current = headHolder;

  listOfValues.map((x) => {
    current.next = new ListNode(x);
    current = current.next;
  });

  return headHolder.next;
};
