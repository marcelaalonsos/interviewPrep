/*
You are given a string of characters. Write a function that finds the first non-repeating character in the string
*/

//input string
//characters could be anything
//hash map you'd be storing there values of those char
//variable to store that first instance
//loop throught the string, each char goes into object
//check if that character is already in the map
//if it is then, ignore that
//if its not, then return that
//first char that does not repeat, maybe it's its index,
//key value pairs of the hash map - key: char / value: count

//approach
/*

a: count++
b: 1
c: 1

*/

var str = "abcde ffeal123 !!..xx001"; // return 'b'

function findNonRepeat(s) {
  //create hashmap
  const map = {};
  //loop through the string
  for (char of s) {
    //if char is not undefined in value
    if (map[char] != undefined) {
      //overwrite value by 1
      map[char] += 1;
    } else {
      //else add it to the map and set value to 1
      map[char] = 1;
    }
  }
  //loop through map to get keys
  for (let key in map) {
    //if the value of key is less than 2
    if (map[key] < 2) {
      //return that key
      return key;
    }
  }
}

console.log(findNonRepeat("sspxzt"));
