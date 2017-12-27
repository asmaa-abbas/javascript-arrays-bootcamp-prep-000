var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, ele) {
  return [ele, ...arr];
}

consdestructivelyAddElementToBeginningOfArray = (arr, ele) => {
  arr.unshift(ele);
  return arr;
};