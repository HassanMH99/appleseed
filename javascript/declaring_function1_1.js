function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
    }

    // Function Expression
    const welcome = function() {
    let welcome = "Welcome to Appleseeds Bootcamp!";
    return welcome;
  }

    function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
    }

    // Function Expression
    const power = function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
  }
  
    function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
    }
    // Function Expression
    const add = function(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
  }
    // From function expressions to function declarations
    const hello = () => "Hello!";
    // Function Declaration
    function hello() {
    return "Hello!";
  }
  
    const squareRoot = a => Math.sqrt(a);
    // Function Declaration
    function squareRoot(a) {
    return Math.sqrt(a);
  }
    const randomNumbers = (a, b) => Math.random() * (a - b) +
    b;
    // Function Declaration
    function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
  }

