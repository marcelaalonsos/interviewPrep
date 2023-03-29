//prompt
/*
Write a function, binarySearch, that takes in a sorted array of numbers and a target. The function should return the index where the target can be found within the array. If the target is not found in the array, then return -1.

You may assume that the input array contains unique numbers sorted in increasing order.

Your function must implement the binary search algorithm.
*/

//basic approach
/*
- input is an array of numbers of length whatever
- input is a target number
- output should be the index of the target in the array numbers
- output should be -1 if the target is not in the array numbers
1. loop through the array
2. get the elements of the array
3. check if the element is equal to target
4. if it is return the index of that element
5. if not, return -1
*/

const search = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) return i;
  }
  return -1;
};

console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8], 6)); //return 6
//analysis
/*
n = length of numbers array
Time: O(n)
Space: O(1)
*/

//binary search approach
/*
- input is an array of numbers of length whatever
- input is a target number
- output should be the index of the target in the array numbers
- output should be -1 if the target is not in the array numbers
- having a pointer at the start of the array
- having another pointer at the end of the array
- when you start looping, you want to find the middle first
- but if the target is less than middle number, then your end pointer has to move closer to the middle
- if the target is greater than the middle number, then the start pointer has to move closer to the middle
- if target is at the middle, then your search is over and you hit the jackpot
- if the target was not found return -1
*/
const binarySearch = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (target < numbers[middle]) {
      end = middle - 1;
    } else if (target > numbers[middle]) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6)); //return 6

//analysis
/*
n = length of numbers array
Time: O(logn)
Space: O(1)
*/
