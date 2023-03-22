/*
Write a function compress that takes in a string as an argument. The funtion should return a compressed version of the string where consecutive occurances of the same characters are compressed into the number of occurrences followed by the character.
Single character occurrnces should not be changed.
You can assume that the input only contains alphabetic characters.
*/

//Approach
/*
1. base condition: if s.length is 1, return s
2. set new array for result
3. set i start of streak, j end of streak; starting at 0
4. while j is less than or equal string.length
5. check is i equals j
6. if so, move j forward by adding and setting by 1;
7. otherwise, streak is over, so number is j - i
8. if number is 1, push that to the result
9. otherwise, push the num parsed as string concatenated with the character
10. i should be equal to j to check streak
11. return the result joined as an empty ''
*/

//solution
const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String(num), s[i]);
      }
      i = j;
    }
  }
  return result.join("");
};
