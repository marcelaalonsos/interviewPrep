//fibonacci

/*
The Fibonacci series is a classic mathematical series in which the next number is calculated as the sum of the previous two numbers:

0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
It can be calculated iteratively but summing the two previous numbers, or the nth Fibonacci number can be calculated recursively:

function fib(n)
  if n is 1 or 0:
    return n
  else
    return fib(n - 1) + fib(n - 2)
*/

//memoization
/*
Memoization is a specialized form of caching used to store the result of a function call. The next time that function is called, instead of running the function itself, the result is used directly. Memoization can result in much faster overall execution times (although it can increase memory requirements as function results are stored in memory).

Memoization is a great technique to use alongside recursion. The memo can even be saved between function calls if it’s being used for common calculations in a program.
*/

//memoizing fibonacci
/*
In pseudocode, our approach to memoization will look something like this:

Create a memo object

function fibonacci(n)
  if n key exists in memo object
    return memo[n]
  else
    calculate current fibonacci number
    store value in memo
    return value
*/
const memo = {};

const fibonacci = (num) => {
  let returnValue;

  if (memo[num]) {
    returnValue = memo[num];
  } else if (num === 0 || num === 1) {
    returnValue = num;
  } else {
    returnValue = fibonacci(num - 1) + fibonacci(num - 2);
    memo[num] = returnValue;
  }
  return returnValue;
};
