//prompt
/*
Write a function, middleValue, that takes in the head of a linked list as an argument. The function should return the value of the middle node in the linked list. If the linked list has an even number of nodes, then return the value of the second middle node.

You may assume that the input list is non-empty.
*/

//approach
/*
- input of the head of a list
- output should be the middle or second to middle value of the linked list
1. first i need to create a variable to store the elemets of the list
2. loop through the list
3. push the values into the variable i created
a -> b -> c -> d -> e
values = [a,b,c,d,e]
4. get the half
5. apply a math.floor(array.legth /2)
return that
edge cases - if the list is empty, return null
edge case if the list only has one value, return that value
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleValue = (head) => {
  const values = [];
  let currentNode = head;
  while (currentNode !== null) {
    values.push(currentNode.val);
    //[a,b,c,d,e]
    currentNode = currentNode.next;
  }
  return values[Math.floor(values.length / 2)];
};

//analysis
/*
n = number of nodes
Time: O(n)
Space: O(n)
*/
