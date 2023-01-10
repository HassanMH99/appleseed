// Fill an array with 100 of the same object using the array fill method.
let object = {name: "John"};
let array = Array(100).fill(object);
// Create an array with numbers ranging from 1-100 using the Array.from method.
let numbers = Array.from({length: 100}, (_, i) => i + 1);
// Convert only values of an object into one array.
let obj = {a: 1, b: 2, c: 3};
let values = Object.values(obj);
// Convert an array into one object.
let arr = [1, 2, 3];
let obj1 = Object.assign({}, arr);
// Find out if an array is an array.
let arr2 = [1, 2, 3];
console.log(Array.isArray(arr)); // true
let obj2 = {};
console.log(Array.isArray(obj)); // false
// Copy an array.
let originalArray = [1, 2, 3];
let copyArray = originalArray.slice();
console.log(copyArray);
