var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// value is the last value assigned to it which is 5
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);
//log is 1 beacuse b2 doesnt return anything
let i;
for (i = 0; i < 3; i++) {
let log = () => {
console.log(i);
}
setTimeout(log, 100);
}
//it log 3-3-3
//the loop completes before the setTimeout function calls the log function,the value of i is 3 by the time the log function is invoked