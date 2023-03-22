/*
Write a function isPrime, that takes in a number as an argument, and returns a boolean indicating whether or not the given number is prime.

You can assume the input number is a positive integer
*/

//Approach
/*
A prime number is a number that is only divisible by 1 and itself.
1. find all the possible factors of n
2. iterate numbers from after 1 to before n (ex. if checking 7, then 2->6)
3. check if n is divisible by numbers
4. if not return true, else return false
5. edge case 1 is not a prime number, so add a check to see if n < 2 then it returns false
*/

//solution
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
