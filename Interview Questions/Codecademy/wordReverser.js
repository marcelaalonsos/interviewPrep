//prompt

/*
Write a wordReverser() function that will take a given string and reverse the order of the words. You may assume that the string is a sentence that contains only letters and spaces, with all words separated by one space.

For example, wordReverser("Codecademy rules") should return "rules Codecademy" and wordReverser("May the Fourth be with you") should return "you with be Fourth the May".
*/

//approach
/*
1.turn the phrase into an array
2. have a result array that will be returned at the end as a string
3. establish edge cases, so for example - if you pass an empty string, return null, if if its only one word, return the word itself
4. loop through array backwards
5. push each element to the new array
6. return the array parse it into a string
*/

function wordReverser(phrase) {
  let reversed = [];
  let array = phrase.split(" ");
  if (array.length === 0) {
    return null;
  }
  if (array.length < 1) {
    return array.join(" ");
  }
  for (let i = array.length; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed.join(" ");
}

//analysis
/*
n = input string
time:
space:
*/
