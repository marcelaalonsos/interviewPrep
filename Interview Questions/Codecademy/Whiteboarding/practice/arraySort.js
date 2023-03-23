//custom comparator in ascending order

const ascendingOrder = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

//custom comparator by length

const sortByLength = (a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return ascendingOrder(a, b);
  }
};

//explicit sort with comparator
/*
The explicitComparator() function will find the indices of a and b in the order array (if they exist) and return the difference between them:

indexA and indexB are initialized to the length of the order array
if a is in order
  indexA = a's index in order
if b is in order
  indexB = b's index in order
return indexA - indexB
*/

const explicitSortWithComparator = (inputArray, order) => {
  const explicitComparator = (a, b) => {
    let indexA = order.length;
    let indexB = order.length;
    if (order.includes(a)) {
      indexA = order.indexOf(a);
    }
    if (order.includes(b)) {
      indexB = order.indexOf(b);
    }
    return indexA - indexB;
  };

  return inputArray.sort(explicitComparator).slice();
};
