/*
Write a function, maxValue that takes in an array of numbers as an argument and returns the largest number in the array
You can assume that the array is non-empty
*/

//approach
/*
1. initiate max variable to -infinity as it is an arbitrary small number
2. iterate through the array
3. compare each element on the array to variable max
4. if it is, set max to element
5. return max
*/

//edge cases
//it still works with an array of negative numbers

//runtime
//O(n)

//solution
const maxValue = (nums) => {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    } else {
      false;
    }
  }
  return max;
};
