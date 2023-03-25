//prompt
/*
Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
*/

//approach
/*
adjacent nodes have to be the same value
max value logic and traverse through the list
max-streak starting at 0;
track current streak = 0;
check for consecutive nodes - previous = null
current pointer = head;
to start, check if current val to previous val, take the current val and assign it to previous;
increment streak to 1;
at any point, whenever current streak > max streak; should replace max streak with that value
current = current next;
take valueof current and compare it to previous val, if they're equal, increment current streak, and reassign max streak value
if value of next is not equal to previous val, decrement value of current streak by 1 but do not overwrite max streak

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  // todo
  let current = head;
  let previous = null;
  let maxCount = 0;
  let currentCount = 0;
  while (current !== null) {
    if (current.val === previous) {
      currentCount += 1;
    } else {
      currentCount = 1;
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
    previous = current.val;
    current = current.next;
  }
  return maxCount;
};

//analysis
/*
n = number of nodes
time: O(n)
space: O(1);
*/
