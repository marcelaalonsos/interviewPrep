//prompt
/*
Write a wordReverser() function that will take a given string and reverse the order of the words. You may assume that the string is a sentence that contains only letters and spaces, with all words separated by one space.

For example, wordReverser("Codecademy rules") should return "rules Codecademy" and wordReverser("May the Fourth be with you") should return "you with be Fourth the May".
*/

//approach
/*

*/

function wordReverser(phrase) {
  // Write your code here
  let reversed = [];
  let array = phrase.split(" ");
  if (array.length === 0) {
    return null;
  }
  if (array.length < 1) {
    return array.join(" ");
  }
  //console.log(array);
  for (let i = array.length; i >= 0; i--) {
    // console.log(array[i]);
    reversed.push(array[i]);
  }
  return reversed.join(" ");
}

//analysis
/*
n = length of string
time: O(n);
space: O(n);
*/
