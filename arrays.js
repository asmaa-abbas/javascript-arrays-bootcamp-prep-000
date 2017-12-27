let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, ele) {
  return arr.unshift(ele);
};

const destructivelyAddElementToBeginningOfArray = (arr, ele) => {
  var newArr = [ele, ...arr];
  return newArr;
};