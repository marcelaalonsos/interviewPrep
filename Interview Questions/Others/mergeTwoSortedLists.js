//prompt
/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

//approach
/*
- function takes 2 inputs - list 1 and list
- function outputs one new sorted linked list merging both inputs in ascending order as well
- lists are already sorted in ascending order - which is awesome
1. start a new ListNode, where the output will be generated towards, started with a null value
2. save this new listnode head in a variable called current
3. while neither of those lists are null, compare the values of l1 and l2
4. if the values of the first list are less than the second list, then set the current.next to the 11, and l1 is equal to the next values
5. else, then current.next is equal to the l2, and set l2, to the next value
6. set current as current.next
7. if neither list is empty, set it to current.next
6. return head equal to the next value, because the head is null
*/
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//iteratively
const mergeTwoLists = (l1, l2) => {
  //start new dummy ListNode
  const head = new ListNode(null);
  //variable to save the head of the new list
  let current = head;
  //while l1 and l2 are not null
  while (l1 && l2) {
    //if value of list 1 is less than value of list 2
    if (l1.val < l2.val) {
      //current.next is equal to l1
      current.next = l1;
      //l1 is equal to l1.next
      l1 = l1.next;
    } else {
      //else current.next = l2
      current.next = l2;
      //l2 is equal to l2.next
      l2 = l2.next;
    }
    //set the next node of the new list
    current = current.next;
  }
  //if l1 is not null, then current.next is equal to l1
  if (l1 !== null) current.next = l1;
  //if l2 is not null, then current.next is equal to l2
  if (l2 !== null) current.next = l2;
  //return the next val of head, since the head is null
  return head.next;
};
//analysis
/*
n = list 1
m = list 2
time: O(min(n,m))
space: O(1)
*/

//recursively
const mergeTwoLists = (l1, l2) => {
  //base case - either list is null
  if (!l1 || !l2) {
    return l1 || l2;
  }
  //set start value to null
  let node = null;
  //if values of l1 are less than values of l2, then node = l1
  if (l1.val < l2.val) {
    node = l1;
    //node.next is the recursive call of l1.next and l2
    node.next = mergeTwoLists(l1.next, l2);
  } else {
    //node is equal to l2
    node = l2;
    //node.next is the recursive call of l1 and l2.next
    node.next = mergeTwoLists(l1, l2.next);
  }
  //return node
  return node;
};

//analysis
/*
n = list 1
m = list 2
time: O(min(n,m))
space: O(min(n,m))
*/
