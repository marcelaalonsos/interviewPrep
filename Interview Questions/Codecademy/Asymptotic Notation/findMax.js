/*
the function findMax() takes in list as an input, and returns the maximum value in the linked list
*/

function findMax(list) {
  let current = list.head;
  let max = current.data;
  while (current.getNextNode() !== null) {
    current = current.getNextNode();
    let val = current.data;
    if (val > max) {
      max = val;
    }
  }
  return max;
}

//the big O runtime is n since it only iterated once through the list

module.exports = {
  findMax,
};
