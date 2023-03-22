const swap = (arr, indexOne, indexTwo) => {
  //store value of element at indexTwo
  const temp = arr[indexTwo];
  //change element at indexTwo for value of indexOne
  arr[indexTwo] = arr[indexOne];
  //change value of element at index one for original value of element at indexTwo
  arr[indexOne] = temp;
};

module.exports = swap;
