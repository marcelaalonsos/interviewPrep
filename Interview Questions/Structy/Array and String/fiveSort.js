//prompt
/*
Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
*/

//approach
/*
1. create 2 pointers to loop through array
2. i is 0
3. j is array.length -1
4. while i is less than or equal to j
5. if element at j is 5, decrement j by 1
6. else if element at i is 5, reverse in place, and increment i by 1
7. else, increment i by 1
8. return the original array
*/

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      i++;
    }
  }
  return nums;
};

//analysis
/*
n = array size
time: O(n)
space: O(1);
*/
