//prompt
/*
Given an integer x, return true if x is a
palindrome
, and false otherwise.



Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

//approach
/*
have to find a way to iterate through an integer, extract values, reverse them and compare it to the original input
one way is to take the input and turn it to a string
take x and assign it as a string
we know we can manipulate strings into arrays, and using methods we can reverse them in place and return them into a string again
we'll call that reversed
compare if x is truly equal to reversed;
if it is return true
otherwise return false;
*/

const isPalindrome = (x) => {
  x = x.toString();
  //console.log(x);
  const reversed = x.toString().split("").reverse().join("");
  //console.log(reversed);
  if (x === reversed) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(1331));
