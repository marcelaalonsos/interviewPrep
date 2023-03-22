const mergeSort = (startArray) => {
  //const that saves length of input array
  const length = startArray.length;
  //if lenght equals 1 return input array
  if (length === 1) {
    return startArray;
  }
  //const mid = floor of length / 2
  const mid = Math.floor(length / 2);
  //left array
  const leftArray = startArray.slice(0, mid);
  //right array
  const rightArray = startArray.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return sortedArray.concat(leftArray).concat(rightArray);
};

const inputArray = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArray));

module.exports = {
  mergeSort,
};
