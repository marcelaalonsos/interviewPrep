//prompt
/*
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

Solve this recursively.
*/

//approach
/*
memoization gives O(1) lookup time
memo is an object
fetch values from it

*/
//memo
const fib = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }
  if (n === 0 || n === 1) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

//analysis
/*
time: O(n)
space: O(n)
*/

//brute-force
// const fib = (n) => {
//   if (n === 0 || n === 1) return n;

//   return fib(n - 1) + fib(n - 2);
// };

//analysis
/*
time: O(2^n)
space: O(n)
*/
