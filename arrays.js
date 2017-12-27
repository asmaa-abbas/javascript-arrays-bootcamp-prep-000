let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr, ele) {
  arr.unshift(ele);
  return arr;
};

const destructivelyAddElementToBeginningOfArray = (arr, ele) => {
  var newArr = [ele, ...arr];
  return newArr;
};