function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
//by function foo() it will print it because call a funtion exist
//but in  console.log(a); it git undefined,the memory takes an a variable but cannot read it beacuse we give the value after we print it.

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
//the first console it will return Aurelio De Rosa
//the second console it will return undefined ,the test variable is assigned the reference of the getFullName function, not the method, so when the test() function is called, it loses the reference to the obj.prop object and returns undefined

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
//The function funcB returns the value of a, which is 1.
//the console.log(typeof a); it is not defined in the globale scope and also the same thing in b

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
//at first will print 2 then second will be 2
//function declarations are hoisted to the top of their scope,the second function declaration will overwrite the first one.

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);
//In the first function funcD1, the variable d is assigned the value of 1 but it is not defined using var, let, or const keyword, this means it becomes a variable in the global scope, and it can be accessed from anywhere in the code.

function funcE() {
    console.log("Value of f in local scope: ", f);
    }
    console.log("Value of f in global scope: ", f);
    var f = 1;
    funcE();
//var keyword are hoisted to the top of their scope, but their assignment is not hoisted. This means that the variable is moved to the top of its scope, but its value is still assigned in the same location as it was declared.
