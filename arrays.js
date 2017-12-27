var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, ele) {
  return [ele, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray (arr, ele) {
  return [...arr, ele];
}

function destructivelyAddElementToEndOfArray (arr, ele) {
  return arr.push(ele);
}