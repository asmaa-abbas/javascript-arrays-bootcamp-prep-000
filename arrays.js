var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, ele) {
  return [ele, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, ele) {
  arr.unshift(ele);
  return arr;
}