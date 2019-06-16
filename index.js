// Add your functions here
function map(array, func) {
  let returnValue = [];
  for (let i = 0; i < array.length; i++) {
    returnValue.push(func(array[i]));
  }
  return returnValue;
}

 function reduce(array, func, startWith) {
  let r = !!startWith ? startWith : array[0];
  let i = !!startWith ? 0 : 1;

   for (; i < array.length; i++) {
    r = func(array[i], r);
  }

   return r;
}