// Add your functions here
function map(sourceArray, func) {
  let returnValue = [];
  for (let i = 0; i < sourceArray.length; i++) {
    returnValue.push(func(sourceArray[i]));
  }
  return returnValue;
}

function reduce(sourceArray, func, startWith) {
  let r = !!startWith ? startWith : sourceArray[0];
  let i = !!startWith ? 0 : 1;

  for (; i < sourceArray.length; i++) {
    r = func(sourceArray[i], r);
  }

  return r;
}
