// From function declarations to explicit and implicit
//return functions (one of each).
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
// Function Declaration with explicit return
function welcome() {
    return 'Welcome to Appleseeds Bootcamp!';
  }
  // Function Declaration with implicit return
  function welcome() {
    let welcome = "Welcome to Appleseeds Bootcamp!";
    welcome;
  }

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
// Function Declaration with implicit return
function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
  }

// From function expressions to IIFE functions.
const squareRoot = (a) => Math.sqrt(a);
// IIFE Function Expression
//(const squareRoot = a => Math.sqrt(a))();
const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// IIFE Function Expression
//(const randomNumbers = (a, b) => Math.random() * (a - b) + b)();