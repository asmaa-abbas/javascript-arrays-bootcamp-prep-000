var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (arr, ele) {
  return [ele, ...arr];
}

const destructivelyAddElementToBeginningOfArray = (arr, ele) => {
  var newArr = [ele, ...arr];
  return newArr;
};