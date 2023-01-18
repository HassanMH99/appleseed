var x = 10;
console.log(x);
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);
//it will print 10-20-20,at first x its a globale scope,
//when we do it again inside the brackets its the same its globale so the variable can be readed outside the bracket then the 2nd and 3rd output will be 20.

var x = 10;
console.log(x);
if (true) {
  (function () {
    var x = 20;
    console.log(x);
  })();
}
console.log(x);
//here there is a closure then the output is 10-20-10
//inside the function the variable 20 is private only inside the function and the last log it will be from the globale scope.

var x = 10;
console.log(x);
function test() {
  var x = 20;
  console.log(x);
  if (x > 10) {
    let x = 30;
    console.log(x);
  }
  console.log(x);
}
test();
console.log(x);
//the first will log 10
//the second when we inside the function at first log 20
//after that it goes to if statment beacuse tha 20>10 then the log is 30 but its a block scope
//after that because we inside the function it will print 20
//at the last log it will print 10

var x;
x = 10;
function test() {
  var x;
  if (x > 20) {
    x = 50;
  }
  console.log(x);
}
test();
//at the first is undefined number
//when we got inside the function there is no initial value of x
//the value of x is 10 then the if statment is false it logs undefined
//to fix this code
// var x = 10;
// function test() {
//   var x = 10;
//   if (x > 20) {
//     x = 50;
//   }
//   console.log(x);
// }
// test();

function test() {
  var x, y;
  if (false) {
    x = 50;
  }
  console.log(x);
  console.log(y);
  y = 100;
  console.log(y);
}
test();
//log undefined-undefined-100
//at first x,y are defined with no initial value both of them are undefined
//then y assign by 100
//and we see here there is a hoisting 


function test(){
    foo();
    bar();
    // Function defiened
    // using function declaration
    function foo(){
    console.log('foo');
    }
    // Function defined
    // using function expression
    var bar = function() {
    console.log('bar');
    }
    }
    test();
    //it will log foo-bar
    //function declarations are hoisted to the top of their scope and are avaliable to use .
