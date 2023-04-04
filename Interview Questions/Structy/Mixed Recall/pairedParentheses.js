//prompt
/*
Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.
*/

//approach
/*
iterate through string but also maintain a count to check how many open parentheses you have, and over time, it should be decremented
for example: (())()
start count at zero count: 0
iterate left to right of the string
(())()
whenever there is an opening parenthesis, increment count by 1
move to the next iteration, and if it is also an open parenthesis, increment count by 1
if in the third iteration, there is a closing parenthesis, decrement count by 1
if the next iteration there is a closing, decrement count by 1
after finishing iteration, and the count is 0, then we should return true, that the string has well formed parentheses
in a case like ())) --> the closing parenthesis will cause the count to be -1, so that returns false immediately because at no point should the count be less than 0
*/

const pairedParentheses = (str) => {
  // start count at 0
  let count = 0;
  //iterate through string
  for (char of str) {
    //if char is equal to (
    if (char === "(") {
      //increase count by 1
      count++;
      // else if char === )
    } else if (char === ")") {
      //and if the count is 0
      if (count === 0) {
        //return false
        return false;
      }
      //otherwise decrease count by 1
      count--;
    }
  }
  //only return true if count === 0
  return count === 0;
};

//analysis
/*
n = length of string
Time: O(n)
Space: O(1)
*/
