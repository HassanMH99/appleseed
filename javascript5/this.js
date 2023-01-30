//1
console.log(this);
//for this it print the empty object becasue this is refers to the object

//2
const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${this.name}`);
    },
    };
    myObj.greet();
    //it will print the hello undefined becasue its an arrow and not using function to fix it we need to put function method
    // replace greet: () =>  to greet:() to  greet: function()

 //3
 const myFuncDec = function () {
    console.log(this);
    };
 //this will refers to the object
 //in this case myFuncDec is not a method of any object
 //it will be a default globale object
 
 //4
 const myFuncArrow = () => {
    console.log(this);
    };
    myFuncArrow();
    //it return the samme 1st example empty object
    //because we call the function and this is refers to the object then it will give us an empty object

 //5
 document.querySelector(".element").addEventListener(() => {
    console.log(this);
    });

//it will pointer to the globale object because the function is passed for arrow function 
//to solve it we need to make function insted of arrow function like this in next step
//() => change to function()    